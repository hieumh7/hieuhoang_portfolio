<script>
  import AnimatedImage from './AnimatedImage.svelte';
</script>

<main>
  <h1>Chào mừng đến với ảnh động Svelte!</h1>
  <AnimatedImage imageSrc="CatLove.gif" altText="Mèo yêu thích" />
</main>

<style>
  main {
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
</style>
