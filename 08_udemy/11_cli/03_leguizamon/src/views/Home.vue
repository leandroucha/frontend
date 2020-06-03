<template>
  <div class="home">
    
    <!-- Main -->
    <section class="pb-4">
        <div id="carousel" class="carousel slide carousel-fade"  data-ride="carousel" data-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/imagen1.png" class="d-block w-100" alt="Imagen 1">
                </div><div class="carousel-item">
                    <img src="../assets/imagen2.jpeg" class="d-block w-100" alt="Imagen 2">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imagen3.jpeg" class="d-block w-100" alt="Imagen 3">
                </div>
                <!-- 
                <div class="carousel-item">
                    <img src="../assets/imagen4.png" class="d-block w-100" alt="Imagen 4">
                </div> -->
                <div class="overlay py-2">
                    <div class="container h-100">
                        <div class="row align-items-center h-100">
                            <div class="col-lg-3 text-center text-lg-left">
                                <h1>Servicio Mecánico <span class="bold">Leguizamón</span></h1>
                                <p>Con más de 43 años de experiencia, realizamos cualquier tipo de reparación y mantenimiento. Queremos que su seguridad no se vea comprometida y la vida útil de su vehículo se prolonge lo máximo posible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Main -->
    
    
    <section id="servicios" class="py-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="text-uppercase semi-bold">Servicios</h2>
          </div>
        </div>
         <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up">
              <div class="box-part text-center desaturate">
                <img  src="../assets/icon_01.png" alt="" class="py-2"><div class="title">
                  <h4  class="semi-bold">Inyeccion electrónica</h4>
                </div>
                <div class="text">
                  <span>Limpieza de inyectores, puesta a punto, adaptacion de parámetros.</span>
                </div>                                 
              </div>
          </div>	 
           <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="50">
            <div class="box-part text-center desaturate">
            <img  src="../assets/icon_02.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Diagnóstico Computarizado</h4>
              </div>
              <div class="text">
                <span>Análisis y verificación de fallas electrónicas utilizando sistemas OBDI, OBDII.</span>
              </div>                      
             </div>
          </div>	 
           <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="100">
            <div class="box-part text-center desaturate">
              <img  src="../assets/icon_03.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Cambio de correas</h4>
              </div>
              <div class="text">
                <span>Cambio de correas de distribucion, poly-v, rodillos y tensores.</span>
              </div>                     
             </div>
          </div>	 
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="150">
            <div class="box-part text-center desaturate">
              <img  src="../assets/icon_04.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Frenos</h4>
              </div>
              <div class="text">
                <span>Cambio de discos y pastillas, rectificación de discos, reparación y cambio de calipers.</span>
              </div>                 
             </div>
          </div>	 
           <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="200">
            <div class="box-part text-center desaturate">
              <img  src="../assets/icon_05.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Embragues</h4>
              </div>
              <div class="text">
                <span>Cambio de placa y disco, ruleman de empuje, convencionales y bimasa.</span>
              </div>              
             </div>
          </div>	 
           <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="250">
            <div class="box-part text-center desaturate">
              <img  src="../assets/icon_06.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Mantenimiento</h4>
              </div>
              <div class="text">
                <span>Cambio de aceite, lubricantes, filtros de aire, aceite, combustible y habitáculo.</span>
              </div>            
             </div>
          </div>
           <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="300">
            <div class="box-part text-center desaturate">
              <img  src="../assets/icon_07.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Tren delantero y trasero</h4>
              </div>
              <div class="text">
                <span>Cambio y revisión de bujes, rulemanes, amortiguadores, rotulas, extremos.</span>
              </div>            
             </div>
          </div>
           <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12"  data-aos="fade-up" data-aos-delay="350">
            <div class="box-part text-center desaturate">
              <img  src="../assets/icon_08.png" alt="" class="py-2"><div class="title">
                <h4  class="semi-bold">Baterías</h4>
              </div>
              <div class="text">
                <span>Colocacion de baterias, control de carga de alternador, cambio y revisión.</span>
              </div>            
             </div>
          </div>
      </div>		
      </div>
  
    </section>
    <!-- estado de reparación -->
    <!-- <div class="container py-4" id="reparacion">
      <div class="row">
        <div class="col">
          <h2 class="text-uppercase">Estado de reparación</h2>
          <p>Para saber el estado de su reparación, ingrese la patente de su vehículo y el código personal que se le envió por mensaje de Whatsapp.</p>
        </div>
      </div>
      <div class="row py-4">
        <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="patente">Patente</label>
                  <input type="text" class="form-control" id="patente" aria-describedby="patenteHelp">
                  <small id="patenteHelp" class="form-text text-muted">Ingrese la patente sin espacios, ni guiones.</small>
                </div>
                <div class="form-group">
                  <label for="idReparacion">Código de reparación</label>
                  <input type="text" class="form-control" id="idReparacion" aria-describedby="reparacionHelp">
                  <small id="reparacionHelp" class="form-text text-muted">Ingrese el código que le enviamos.</small>
                </div>
                <a href="reparacion.html" type="submit" class="btn btn-red">Ver estado de reparación</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- /estado de reparación -->

    <!-- contacto -->
    <div class="contacto pt-4" id="contacto">
      <div class="container">
        <div class="row pb-4">
          <div class="col">
            <h2 class="text-uppercase semi-bold">Contacto</h2>
            <p>Utilice cualquiera de los medios detallados a continuación para comunicarse con nosotros.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <span class="fa-stack fa-lg">
              <i class="fas fa-clock-o fa-stack-1x"></i>
            </span>
            <span>Lunes a Viernes - 8.00 a 17.00</span> <br><br><br>
            
            <span class="fa-stack fa-lg">
              <i class="fas fa-map-marker-alt fa-stack-1x"></i>
            </span>
            <a target="_blank" href="https://www.google.com/maps?ll=-32.958537,-60.667909&z=14&t=m&hl=en&gl=AR&mapclient=embed&cid=3208777413178355326">Riobamba 2973, Rosario, Santa Fe</a> <br><br><br>
            <span class="fa-stack fa-lg">
              <i class="fa fas fa-phone fa-stack-1x"></i>
            </span>
            <a href="tel:+543414324090">+54 341 432-4090</a><br><br><br>
            
            <span class="fa-stack fa-lg">
              <i class="fas fa-mobile-alt fa-stack-1x"></i>
            </span>
            <a href="tel:+5493413003771">+54 9 341 300-3771</a><br><br><br>
            <span class="fa-stack fa-lg">
              <i class="fas fa-envelope fa-stack-1x"></i>
            </span>
            <a href="mailto:contacto@servicioleguizamon.com.ar">contacto@servicioleguizamon.com.ar</a>
          </div>
          <div class="col-lg-6 pb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13390.859386314743!2d-60.6679094!3d-32.9585372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c87de0e73caee7e!2sTaller%20Leguizamon!5e0!3m2!1sen!2sar!4v1589207251445!5m2!1sen!2sar" width="100%" height="400px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- /contacto -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
