<template>
  <footer>
    <div class="footerMap">
      <MapY />
    </div>
    <div class="footer content">
      <div class="footer-address footer-contact">
        <h3>Адрес:</h3>
        <div>
          <p>г.Москва</p>
          <p>ул. Дербеневская, дом 1, строение 6, подъезд 4, этаж 2.</p>
        </div>
      </div>
      <div class="footer-tell footer-contact">
        <h3>Телефоны:</h3>
        <div class="footer-tel">
          <a href="tel:+74959260126">+7 (495) 926-01-26</a><br />
          <a href="tel:+74956460094">+7 (495) 646-00-94</a>
        </div>
      </div>

      <div class="footer-email footer-contact">
        <h3>E-mail:</h3>
        <a href="malito:info@nologostudio.ru">info@nologostudio.ru</a>
      </div>
      <div class="footer-skype footer-contact">
        <h3>Skype:</h3>
        <a href="Skype:alex-trainer">alex-trainer</a>
      </div>
      <div class="footer-copyright footer-contact">
        <p>© 1997-2014 WebStore</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import MapY from './MapY.vue';


export default {

    components: {MapY  }
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  z-index: 10;
  height: 905px;
  margin-top: -158px;
  display: flex;
  align-items: flex-end;
}
.footerMap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 17%, 100% 100%, 0 100%, 0 0);
  z-index: 1;
  & img{
    width: 100%;
    height: 100%;
  }
}
.footer {
  position: relative;
  z-index: 10;
  padding: 30px 30px 20px;
  background-color: #fff;
  column-count: 2;
  & h3 {
    @include RobotoB13;
    width: 77px;
  }
  & p,
  a {
    @include RobotoR13;
    line-height: 1.5;
  }
}
.footer-contact {
  display: flex;
  margin-bottom: 20px;
  margin-right: 50px;
  & div {
    margin-left: 11px;
  }
}
</style>
