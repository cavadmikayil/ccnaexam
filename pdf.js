/* Canvas görüntüsünü A4 landscape PDF kimi saxlayır; xarici asılılıq yoxdur. */
(function () {
  'use strict';
  function bytes(text) { return new TextEncoder().encode(text); }
  function create(canvas) {
    const image = Uint8Array.from(atob(canvas.toDataURL('image/jpeg', 0.95).split(',')[1]), c => c.charCodeAt(0));
    const parts = [bytes('%PDF-1.4\n')], offsets = [0]; let size = parts[0].length;
    function add(part) { parts.push(part); size += part.length; }
    function object(id, body, stream) {
      offsets[id] = size;
      add(bytes(id + ' 0 obj\n' + body));
      if (stream) { add(bytes('\nstream\n')); add(stream); add(bytes('\nendstream')); }
      add(bytes('\nendobj\n'));
    }
    object(1, '<< /Type /Catalog /Pages 2 0 R >>');
    object(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
    object(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 841.89 595.28] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
    object(4, '<< /Type /XObject /Subtype /Image /Width ' + canvas.width + ' /Height ' + canvas.height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + image.length + ' >>', image);
    const commands = bytes('q\n841.89 0 0 595.28 0 0 cm\n/Im0 Do\nQ');
    object(5, '<< /Length ' + commands.length + ' >>', commands);
    const xref = size;
    add(bytes('xref\n0 6\n0000000000 65535 f \n' + offsets.slice(1).map(n => String(n).padStart(10,'0') + ' 00000 n \n').join('') + 'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + xref + '\n%%EOF\n'));
    return new Blob(parts, {type:'application/pdf'});
  }
  function download(canvas, name) {
    const url = URL.createObjectURL(create(canvas));
    const link = document.createElement('a'); link.href = url; link.download = name;
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
  window.TryExamPDF = {create, download};
})();
