<?php
include('inc/header.php');
?>
<div class="container">
  <section id="about">
    <h1 class="intro">gallery</h1>
    <div class="carousel-container">

      <span id="prevBtn"><i class="fas fa-arrow-left"></i></span>
      <span id="nextBtn"><i class="fas fa-arrow-right"></i></span>

      <div class="carousel-slide">
        <img src="./img/img_gallery/img5.jpg" alt="" id="lastClone">
        <img src="./img/img_gallery/img1.jpg" alt="">
        <img src="./img/img_gallery/img2.jpg" alt="">
        <img src="./img/img_gallery/img3.jpg" alt="">
        <img src="./img/img_gallery/img4.jpg" alt="">
        <img src="./img/img_gallery/img5.jpg" alt="">
        <img src="./img/img_gallery/img1.jpg" alt="" id="firstClone">
      </div><!-- carousel-slide -->

    </div><!-- carousel-container -->

  </section>
</div>
<?php
include('inc/footer.php');
?>