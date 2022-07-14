<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../public/programming.jpg"
                class="d-block"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/HtmlCss.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">HTML & CSS</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/nodeJs.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">NODE JS</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img src="../../public/git.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">GIT</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/react.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">REACT</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/Javascript.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">JAVASCRIPT</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/jquery.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">JQUERY</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                src="../../public/python.svg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">PYTHON</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img src="../../public/sql.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">SQL</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <!-- <a href="#" class="btn btn-dark p-1">_</a> -->
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesSection",
};
</script>

<style>
img {
  max-height: 100px;
  width: 100%;
}
.card {
  overflow: hidden;
  max-width: fit-content;
}
</style>
