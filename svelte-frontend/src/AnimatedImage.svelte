<script>
  // Bạn có thể thêm các logic ở đây nếu cần
  export let imageSrc = 'CatLove.gif'; // Đường dẫn tới ảnh
  export let altText = '';  // Văn bản mô tả ảnh
</script>

<style>
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  .animated-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: moveImage 4s ease-in-out infinite;
  }

  @keyframes moveImage {
    0% {
      transform: translateX(0) rotate(0deg);
      opacity: 0.8;
    }
    50% {
      transform: translateX(50px) rotate(10deg);
      opacity: 1;
    }
    100% {
      transform: translateX(0) rotate(-10deg);
      opacity: 0.8;
    }
  }
</style>

<div class="image-container">
  <img class="animated-image" src={imageSrc} alt={altText} />
</div>
