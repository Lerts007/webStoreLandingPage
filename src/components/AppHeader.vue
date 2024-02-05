<template>
  <header>
    <div class="header content">
      <div class="topHeader">
        <div class="logo">
          <img src="img/logo.svg" alt="" />
        </div>
        <div class="contact">
          <img src="img/phoneIcon.svg" alt="" />
          <a href="tel:+74959260126">+7 (495) 926-01-26</a>
          <Btn1 class="btn--contact" textBtn="Заказать сайт" />
        </div>
      </div>
      <div class="bootomHeader">
        <nav class="menu">
          <ul>
            <li>компания</li>
            <li>услуги</li>
            <li>работы</li>
            <li>контакты</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Btn1 from "./UI/Btn1.vue";

export default { components: { Btn1 } };
</script>

<style lang="scss">
header {
  margin-bottom: 16px;
}
.topHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 16px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e1e1;
}
.logo {
  padding-top: 5px;
}
.contact {
  display: flex;
  align-items: center;
  // margin-top: -10px;
  & a {
    @include RobotoL18;
    margin-left: 10px;
    margin-right: 40px;
  }
  // & .btn--contact {
  // }
}
.menu {
  @include RobotoB13;
  text-transform: uppercase;
  & ul {
    display: flex;
    gap: 50px;
  }
}
</style>
