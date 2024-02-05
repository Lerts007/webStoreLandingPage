<template>
  <section class="sectionTop">
    <div class="sectionTop-background"></div>
    <div class="sectionTop-main content">
      <img class="sectionTop-main--img" src="img/iMac.png" alt="" srcset="" />
      <div class="sectionTop-main-info">
        <h1>
          Корпоративный <br />
          сайт
        </h1>
        <p>
          от<br />
          <span>50 000</span><br />
          рублей
        </p>
        <Btn2 class="sectionTop-main--btn" textBtn="Заказать сайт" />
      </div>
    </div>
  </section>
  <section class="sectioninfoCompany">
    <div class="infoCompany content">
      <div class="infoCompany-text">
        <h2>О компании</h2>
        <p>
          <LogoText /> — многопрофильная студия дизайна, основанная в 2006 году.
          За эти годы мы успели поработать в разных направлениях, реализовали
          множество проектов, достигли профессиональных высот и собрали
          внушительное портфолио. <br />
          Сегодня мы сосредоточились на том, что нам по-настоящему нравится:
          дизайн и разработка веб-сайтов и мобильных приложений.
        </p>
        <p>
          Мы гордимся своей замечательной командой по-настоящему талантливых
          людей: дизайнеров, программистов, менеджеров, тестировщиков,
          проектировщиков. Все сотрудники <LogoText /> работают в штате, поэтому
          мы гарантируем, что весь комплекс работ по разработке, созданию,
          поддержке и продвижению сайтов выполняется строго профессионально и
          качественно.
        </p>
        <p>
          Мы уверены, что хорошая, чёткая и последовательная разработка имеет
          большое значение для эффективного маркетинга. Поэтому предлагаем
          высококачественный дизайн, удобство и функциональность, адаптированные
          под каждого клиента в зависимости от его потребностей и поставленных
          бизнес-задач.
        </p>
      </div>
      <div class="infoCompany-img">
        <img src="img/Camera.png" alt="Camera" />
        <img src="img/NoteBook.png" alt="NoteBook" width="400" />
      </div>
    </div>
  </section>
</template>

<script>
import Btn2 from "./UI/Btn2.vue";
import LogoText from "./UI/LogoText.vue";

export default { components: { Btn2, LogoText } };
</script>

<style lang="scss" scoped>
// sectionTop
.sectionTop {
  position: relative;
  z-index: 10;
  height: 982px;
}
.sectionTop-background{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  // background-color: red;
  clip-path: polygon(100% 14.7%, 100% 84.7%, 0 100%, 0 0);
  background-image: radial-gradient(circle closest-side at 50% 50%, rgb(132,138,152) 0%, rgb(88,91,99) 100%);
}
.sectionTop-main {
  position: relative;

  padding-top: 210px;
}
.sectionTop-main--img {
  position: absolute;
  top: 60px;
  right: -80px;
  z-index: -1;
}
.backgroundImg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.sectionTop-main-info {
  & h1 {
    @include RobotoB60;
  }
  & p {
    @include RobotoR60;
    line-height: 1;
    & span {
      @include RobotoB100;
      line-height: 0.9;
    }
  }
}
.sectionTop-main--btn {
  margin-top: 50px;
}

// infoCompany
.sectioninfoCompany {
  position: relative;
  z-index: -1;
  margin-top: -150px;
  padding-top: 150px;
  padding-bottom: 200px;
  background-color: #eaeae7;
}
.infoCompany {
  display: flex;
  justify-content: space-between;
  padding-top: 58px;
}
.infoCompany-text {
  width: 460px;
  & h2 {
    @include RobotoB28;
    margin-bottom: 118px;
  }
  & p {
    @include RobotoR16;
    line-height: 32px;
    margin-bottom: 34px;
  }
}
.infoCompany-img {
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
