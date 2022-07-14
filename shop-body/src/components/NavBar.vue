<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- 7.Use the global router-link component to create navigable links -->
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page">Home</a>
                </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/programs"><a class="nav-link">Programs</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/courses"><a class="nav-link">Courses</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/alumni"><a class="nav-link">Alumni</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/staff"><a class="nav-link">Staff</a></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>

</style>
