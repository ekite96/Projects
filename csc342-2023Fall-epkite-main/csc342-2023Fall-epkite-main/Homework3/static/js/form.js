document.addEventListener('DOMContentLoaded', (event) => {
  const imageInput = document.getElementById('imageInput');
  const previewImage = document.getElementById('previewImage');

  imageInput.addEventListener('change', function (event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block'; 
      };

      reader.readAsDataURL(selectedFile);
    } else {
      previewImage.src = '';
      previewImage.style.display = 'none';
    }
  });
});