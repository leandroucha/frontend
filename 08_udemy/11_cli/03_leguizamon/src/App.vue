<template>
  <div id="app">
    <div id="nav" >
      <a href="https://api.whatsapp.com/send?phone=5493413003771&text=Hola%21+Cu%C3%A1ndo+puedo+pasar+a+dejarles+el+auto%3F" class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
      </a>
    <!-- Header -->
    <nav id="mainNavbar" class="navbar navbar-expand-lg navbar-dark bg-red sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#main">
                <img src="/assets/logo.png" height="50px" alt=""> 
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/#main">¿Quiénes somos?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#contacto">Contacto</a>
                    </li>
                     <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link> 
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
    <!-- /Header -->
    
    <router-view/>

    <!-- Footer -->
    <footer id="footer" class="pb-4 pt-4">
        <div class="container">
            <div class="row text-center">
                <!-- <div class="col-12 col-lg">
                    <a href="#">Preguntas Frecuentes</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Contactanos</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Prensa</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Conferencias</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Terminos y condiciones</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Privacidad</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#">Estudiantes</a>
                </div>-->
            </div> 
        </div>
    </footer>
    </div>
  </div>
</template>

