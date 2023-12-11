<template>
  <body class="home dark-theme">
    <div id="__next">
      <div class="container-page">
        <header class="header" id="MyElement">
          <div class="header__builder">
            <div class="row">
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right">
                <!-- <a href="#" class="switcher-btn">
                  <span class="sw-before"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <doth
                        id="Dark_Theme"
                        data-name="Dark Theme"
                        fill="#000"
                        d="M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z"
                        transform="translate(-1737 -98)"
                      ></doth></svg></span
                  >
                  <span class="sw-after"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.22"
                      height="22.313"
                      viewBox="0 0 22.22 22.313"
                    >
                      <doth
                        id="Light_Theme"
                        data-name="Light Theme"
                        fill="#fff"
                        d="M1752.49,105.511a5.589,5.589,0,0,0-3.94-1.655,5.466,5.466,0,0,0-3.94,1.655,5.61,5.61,0,0,0,3.94,9.566,5.473,5.473,0,0,0,3.94-1.653,5.643,5.643,0,0,0,1.65-3.957A5.516,5.516,0,0,0,1752.49,105.511Zm-1.06,6.85a4.1,4.1,0,0,1-5.76,0,4.164,4.164,0,0,1,0-5.788A4.083,4.083,0,0,1,1751.43,112.361Zm7.47-3.662h-2.27a0.768,0.768,0,0,0,0,1.536h2.27A0.768,0.768,0,0,0,1758.9,108.7Zm-10.35,8.12a0.777,0.777,0,0,0-.76.769v2.274a0.777,0.777,0,0,0,.76.767,0.786,0.786,0,0,0,.77-0.767v-2.274A0.786,0.786,0,0,0,1748.55,116.819Zm7.85-.531-1.62-1.624a0.745,0.745,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.625a0.747,0.747,0,0,0,1.06,0A0.759,0.759,0,0,0,1756.4,116.288ZM1748.55,98.3a0.777,0.777,0,0,0-.76.768v2.273a0.778,0.778,0,0,0,.76.768,0.787,0.787,0,0,0,.77-0.768V99.073A0.786,0.786,0,0,0,1748.55,98.3Zm7.88,3.278a0.744,0.744,0,0,0-1.06,0l-1.62,1.624a0.758,0.758,0,0,0,0,1.063,0.745,0.745,0,0,0,1.06,0l1.62-1.624A0.758,0.758,0,0,0,1756.43,101.583Zm-15.96,7.116h-2.26a0.78,0.78,0,0,0-.77.768,0.76,0.76,0,0,0,.77.768h2.26A0.768,0.768,0,0,0,1740.47,108.7Zm2.88,5.965a0.745,0.745,0,0,0-1.06,0l-1.62,1.624a0.759,0.759,0,0,0,0,1.064,0.747,0.747,0,0,0,1.06,0l1.62-1.625A0.758,0.758,0,0,0,1743.35,114.664Zm0-11.457-1.62-1.624a0.744,0.744,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.624a0.745,0.745,0,0,0,1.06,0A0.758,0.758,0,0,0,1743.35,103.207Z"
                        transform="translate(-1737.44 -98.313)"
                      ></doth></svg></span>
                </a> -->
                <a
                  class="menu-btn"
                  :class="{
                    active: isSidebar,
                  }"
                  v-on:click="showSidebar()"
                  ref="sidebarSource"
                  ><span></span><span></span
                ></a>
                <div
                  class="menu-full-overlay"
                  :class="{
                    is_open: isSidebar,
                    visible: isSidebar,
                    has_scroll: isSidebar,
                    animate_active: isSidebar,
                  }"
                >
                  <div class="menu-full-container">
                    <div class="container">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div class="menu-full">
                            <ul class="menu-full">
                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/"
                                  class="splitting-text-anim-2 words chars splitting"
                                  ><span
                                    data-word="Home"
                                    class="word"
                                    style="--word-index: 0"
                                    >Home</span
                                  ></nuxt-link
                                >
                              </li>

                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/#skills-section"
                                  class="splitting-text-anim-2 words chars splitting"
                                  ><span
                                    data-word="Skills"
                                    class="word"
                                    style="--word-index: 0"
                                    >Skills</span
                                  ></nuxt-link
                                >
                              </li>
                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/#projects-section"
                                  class="splitting-text-anim-2 words chars splitting"
                                  ><span
                                    data-word="Projects"
                                    class="word"
                                    style="--word-index: 0"
                                    >Projects</span
                                  ></nuxt-link
                                >
                              </li>
                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/#resume-section"
                                  class="splitting-text-anim-2 words chars splitting"
                                >
                                  <span
                                    data-word="Resume"
                                    class="word"
                                    style="--word-index: 0"
                                    >Resume
                                  </span>
                                </nuxt-link>
                              </li>
                              <!-- <li class="menu-item">
                                <a
                                  data-splitting="chars"
                                  href="/#testimonials-sec onClick={() => linkClick()}tion"
                                  class="splitting-text-anim-2 words chars splitting"
                                  style="--word-total: 1; --char-total: 12"
                                  ><span
                                    data-word="Testimonials"
                                    class="word"
                                    style="--word-index: 0"
                                    ><span
                                      data-char="T"
                                      class="char"
                                      style="--char-index: 0"
                                      >T</span
                                    ><span
                                      data-char="e"
                                      class="char"
                                      style="--char-index: 1"
                                      >e</span
                                    ><span
                                      data-char="s"
                                      class="char"
                                      style="--char-index: 2"
                                      >s</span
                                    ><span
                                      data-char="t"
                                      class="char"
                                      style="--char-index: 3"
                                      >t</span
                                    ><span
                                      data-char="i"
                                      class="char"
                                      style="--char-index: 4"
                                      >i</span
                                    ><span
                                      data-char="m"
                                      class="char"
                                      style="--char-index: 5"
                                      >m</span
                                    ><span
                                      data-char="o"
                                      class="char"
                                      style="--char-index: 6"
                                      >o</span
                                    ><span
                                      data-char="n"
                                      class="char"
                                      style="--char-index: 7"
                                      >n</span
                                    ><span
                                      data-char="i"
                                      class="char"
                                      style="--char-index: 8"
                                      >i</span
                                    ><span
                                      data-char="a"
                                      class="char"
                                      style="--char-index: 9"
                                      >a</span
                                    ><span
                                      data-char="l"
                                      class="char"
                                      style="--char-index: 10"
                                      >l</span
                                    ><span
                                      data-char="s"
                                      class="char"
                                      style="--char-index: 11"
                                      >s</span
                                    ></span
                                  ></a
                                >
                              </li> -->
                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/#achievements-section"
                                  class="splitting-text-anim-2 words chars splitting"
                                >
                                  <span
                                    data-word="ECA"
                                    class="word"
                                    style="--word-index: 0"
                                    >ECA
                                  </span>
                                </nuxt-link>
                              </li>
                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/#interests-section"
                                  class="splitting-text-anim-2 words chars splitting"
                                >
                                  <span
                                    data-word="Interests"
                                    class="Interests"
                                    style="--word-index: 0"
                                    >Interests
                                  </span>
                                </nuxt-link>
                              </li>
                              <li class="menu-item">
                                <nuxt-link
                                  data-splitting="chars"
                                  to="/#contact-section"
                                  class="splitting-text-anim-2 words chars splitting"
                                  ><span
                                    data-word="Contact"
                                    class="word"
                                    style="--word-index: 0"
                                    >Contact</span
                                  ></nuxt-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="menu-social-links">
                            <a
                              href="https://www.facebook.com/jaaahaaan/"
                              target="blank"
                              title="facebook"
                              class="scrolla-element-anim-1"
                              ><i class="lab la-facebook-f"></i></a
                            ><a
                              href="https://www.linkedin.com/in/-jaahaan-/"
                              target="blank"
                              title="linkedin"
                              class="scrolla-element-anim-1"
                              ><i class="lab la-linkedin-in"></i></a
                            ><a
                              href="https://github.com/jaahaan"
                              target="blank"
                              title="github"
                              class="scrolla-element-anim-1"
                              ><i class="lab la-github"></i
                            ></a>
                          </div>
                          <div class="v-line-block"><span></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="menu-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="wrapper">
          <section
            id="started-section"
            class="section section-hero gradient-top"
          >
            <div class="container">
              <div class="started v-line v-line-left">
                <div class="section hero-started">
                  <div
                    data-animate="active"
                    class="content scrolla-element-anim-1 scroll-animate animate__active"
                    style="visibility: visible"
                  >
                    <div class="titles">
                      <div class="l-subtitle">
                        <span> Hello, <b>I'm</b></span>
                      </div>
                      <h1
                        data-splitting="chars"
                        data-animate="active"
                        class="title splitting-text-anim-1 scroll-animate animate__active words chars splitting"
                        style="
                          visibility: visible;
                          --word-total: 2;
                          --char-total: 9;
                        "
                      >
                        <span
                          ><b
                            ><span
                              data-word="Nargsh"
                              class="word"
                              style="--word-index: 0"
                              ><span
                                data-char="N"
                                class="char"
                                style="--char-index: 1"
                                >N</span
                              ><span
                                data-char="A"
                                class="char"
                                style="--char-index: 2"
                                >A</span
                              ><span
                                data-char="R"
                                class="char"
                                style="--char-index: 3"
                                >R</span
                              ><span
                                data-char="G"
                                class="char"
                                style="--char-index: 4"
                                >G</span
                              ><span
                                data-char="I"
                                class="char"
                                style="--char-index: 5"
                                >I</span
                              ><span
                                data-char="S"
                                class="char"
                                style="--char-index: 6"
                                >S</span
                              ><span
                                data-char="H"
                                class="char"
                                style="--char-index: 7"
                                >H</span
                              ></span
                            ></b
                          >
                          <span
                            data-word="JAHAN"
                            class="word"
                            style="--word-index: 1"
                            ><span
                              data-char="J"
                              class="char"
                              style="--char-index: 8"
                              >J</span
                            ><span
                              data-char="A"
                              class="char"
                              style="--char-index: 9"
                              >A</span
                            ><span
                              data-char="H"
                              class="char"
                              style="--char-index: 9"
                              >H</span
                            ><span
                              data-char="A"
                              class="char"
                              style="--char-index: 9"
                              >A</span
                            ><span
                              data-char="N"
                              class="char"
                              style="--char-index: 9"
                              >N</span
                            ></span
                          ></span
                        >
                      </h1>
                      <div class="label l-subtitle">
                        <strong
                          ><vue-typer caret-animation="expand" :text="typer">
                          </vue-typer
                        ></strong>
                      </div>
                    </div>
                    <div class="description">
                      <div>
                        <p>
                          I go by Lisa, but my official name is Nargish Jahan,
                          which appears in all my legal documents. Over the
                          years, I have consistently demonstrated my expertise
                          in crafting websites and creating innovative Android
                          applications. I am passionate about pushing the
                          boundaries of technology and constantly seek new
                          challenges to expand my knowledge and expertise
                          further.
                        </p>
                      </div>
                    </div>
                    <div class="bts">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1rK6OF-mooDtQUti1Y-etMeNnmJX-hUEt/view?usp=drive_link"
                        class="btn"
                        ><span>Download Resume</span></a
                      >
                      <!-- <a href="#skills-section" class="btn-lnk">My Skills</a> -->
                    </div>
                    <div class="hero-shape hero-bottom-shape">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div
                    data-animate="active"
                    class="slide scrolla-element-anim-1 scroll-animate animate__active"
                    style="visibility: visible"
                  >
                    <img
                      decoding="async"
                      src="assets/img/profile2.png"
                      alt="<b>Nargish</b> Jahan"
                    />
                    <span class="circle circle-1"> </span>
                    <span
                      class="circle img-1"
                      style="background-image: url('assets/img/dot-1.png')"
                    ></span
                    ><span
                      class="circle img-2"
                      style="background-image: url('assets/img/dot-2.png')"
                    ></span
                    ><span
                      class="circle img-3"
                      style="background-image: url('assets/img/dot-2.png')"
                    ></span>
                    <div class="info-list">
                      <ul>
                        <li>
                          <span class="num"
                            ><a
                              target="_blank"
                              rel="nofollow"
                              href="https://www.facebook.com/jaaahaaan/"
                            >
                              <i class="fa-brands fa-facebook"></i></a
                          ></span>
                          <span class="num"
                            ><a
                              target="_blank"
                              rel="nofollow"
                              href="https://www.linkedin.com/in/-jaahaan-/"
                              ><i class="fa-brands fa-linkedin"></i></a
                          ></span>
                          <span class="num"
                            ><a
                              target="_blank"
                              rel="nofollow"
                              href="https://github.com/jaahaan"
                              ><i class="fa-brands fa-github"></i></a
                          ></span>
                        </li>
                        <li>
                          <span class="num"
                            ><a
                              target="_blank"
                              rel="nofollow"
                              href="https://www.instagram.com/jaahaan_lisaa/"
                            >
                              <i class="fa-brands fa-instagram"></i></a
                          ></span>
                          <span class="num"
                            ><a
                              class="ga-events"
                              data-eventcategory="Mail from footer"
                              data-eventaction="Click to action"
                              data-eventlabel="njlisa25@gmail.com"
                              href="mailto:njlisa25@gmail.com"
                              ><i class="fa-solid fa-envelope"></i></a
                          ></span>
                          <span class="num"
                            ><a
                              target="_blank"
                              rel="nofollow"
                              href="https://goo.gl/maps/rnoiUvgq6Lv4MxS66"
                              ><i class="fa-solid fa-location-dot"></i></a
                          ></span>
                          <!-- <span class="num">6 <strong>+</strong></span
                          ><span class="value"
                            >Completed <strong>Projects</strong></span
                          > -->
                        </li>
                      </ul>
                    </div>
                    <div class="hero-shape hero-top-shape">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div class="l-bgtitle"><span> Engineer </span></div>
              </div>
            </div>
          </section>

          <section class="section gradient-bottom" id="skills-section">
            <div class="l-heading reveal">
              <div class="container">
                <div class="m-titles align-center">
                  <h2
                    class="m-title splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span>
                      <span
                        class="word"
                        data-word="Professional"
                        style="--word-index: 0"
                        >Professional </span
                      ><span class="whitespace"> </span
                      ><span
                        class="word"
                        data-word="Skills"
                        style="--word-index: 1"
                        >Skills</span
                      >
                    </span>
                  </h2>

                  <div
                    class="m-subtitle splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span
                      ><span class="word" data-word="my" style="--word-index: 0"
                        >my</span
                      >
                      <b
                        ><span
                          class="word"
                          data-word="Talent"
                          style="--word-index: 1"
                          >Talent</span
                        ></b
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="v-line v-line-left reveal">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div
                      data-animate="active"
                      class="filter-links scrolla-element-anim-1 scroll-animate animate__active"
                      style="visibility: visible"
                    >
                      <a
                        data-href=".works-col"
                        class="c-pointer l-subtitle active"
                        >Programming</a
                      >
                    </div>
                    <div class="skills-items">
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> JAVA </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 75%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">75 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> PHP </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 60%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">60 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> JavaScript </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 50%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">50 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> C </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 50%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">50 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Python </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 20%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">20 <span>%</span></span>
                        </div>
                      </div>

                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> CSS </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 60%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">60 <span>%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div
                      data-animate="active"
                      class="filter-links scrolla-element-anim-1 scroll-animate animate__active"
                      style="visibility: visible"
                    >
                      <a
                        data-href=".works-col"
                        class="c-pointer l-subtitle active"
                        >Framework</a
                      >
                    </div>
                    <div class="skills-items">
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Android </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 50%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">50 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Laravel </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 60%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">60 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> VueJS </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 60%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">60 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> ReactJS </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 20%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">20 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Django </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 20%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">20 <span>%</span></span>
                        </div>
                      </div>

                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Bootstrap </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 80%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">80 <span>%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div
                      data-animate="active"
                      class="filter-links scrolla-element-anim-1 scroll-animate animate__active"
                      style="visibility: visible"
                    >
                      <a
                        data-href=".works-col"
                        class="c-pointer l-subtitle active"
                        >Others</a
                      >
                    </div>
                    <div class="skills-items">
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> MySQL </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 50%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">50 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Firebase </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 30%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">30 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Git </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 50%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">50 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Microsoft Office </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 70%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">70 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> LaTeX (Overleaf) </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 50%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">50 <span>%</span></span>
                        </div>
                      </div>
                      <div
                        class="skills-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name"><span> Soft Skills </span></h6>

                        <div class="dots">
                          <div class="dot" style="width: 70%">
                            <span></span>
                          </div>
                        </div>
                        <div class="value">
                          <span class="num">70 <span>%</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="l-bgtitle"><span> Skills </span></div>
              </div>
            </div>
          </section>
          <section class="section gradient-center" id="projects-section">
            <div class="l-heading reveal">
              <div class="container">
                <div class="m-titles align-center">
                  <h2
                    class="m-title splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 1; visibility: visible"
                  >
                    <span>
                      <span
                        class="word"
                        data-word="Portfolio"
                        style="--word-index: 0"
                        >Portfolio</span
                      >
                    </span>
                  </h2>
                  <div
                    class="m-subtitle splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span
                      ><span class="word" data-word="my" style="--word-index: 0"
                        >my</span
                      >
                      <b
                        ><span
                          class="word"
                          data-word="Projects"
                          style="--word-index: 1"
                          >Projects</span
                        ></b
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="v-line v-line-right reveal">
              <div class="container">
                <div class="projects-box">
                  <div
                    class="projects-items projects-masonry-items row"
                    style="position: relative; height: 700.94px"
                  >
                    <div
                      class="project-carousel"
                      style="position: absolute; left: 0%; top: 0px"
                    >
                      <hooper
                        :settings="project"
                        :itemsToSlide="2"
                        :wheelControl="false"
                        :infiniteScroll="false"
                      >
                        <slide>
                          <div class="project-single--item">
                            <div class="img-box">
                              <div class="bg-overlay"></div>
                              <div class="bg-image">
                                <img src="assets/img/crypto-web.png" alt="" />
                              </div>
                              <div class="demo-item">
                                <div class="image img">
                                  <img src="assets/img/crypto-web.png" alt="" />
                                  <a
                                    target="_blank"
                                    href="https://github.com/jaahaan/Cryptanalyst-Website"
                                    ><i
                                      class="fa-solid fa-arrow-up-right-from-square icon"
                                    ></i
                                  ></a>
                                </div>
                              </div>
                              <!-- <div class="image">
                                <img src="assets/img/crypto-web.png" alt="" />
                              </div> -->
                            </div>

                            <div class="desc">
                              <span class="category"> Website </span>
                              <h5 class="name">
                                Cryptanalyst Website
                                <!-- <a href="/work-single">Cryptanalyst Website</a> -->
                              </h5>
                              <div class="text">
                                <p>
                                  • Description: Implemented cryptographic
                                  algorithms such as Rail Fence, Caesar Cipher,
                                  Vernam Cipher, Vigenère Cipher And also one
                                  can calculate Modulus of positive and negative
                                  numbers.
                                  <br />
                                  • Technical Skills: Django, ReactJS, Python,
                                  JS, HTML, CSS, SASS, Tailwind.
                                </p>
                              </div>
                              <!-- <a
                                class="lnk"
                                target="_blank"
                                href="https://github.com/jaahaan/Cryptanalyst-Website"
                                >Source Code</a
                              > -->
                            </div>
                          </div>
                        </slide>
                        <slide>
                          <div class="project-single--item">
                            <div class="img-box">
                              <div class="bg-overlay"></div>
                              <div class="bg-image">
                                <img
                                  src="assets/img/menu_Cryptanalyst.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="demo-item">
                                <div class="image img">
                                  <img
                                    src="assets/img/logo_Cryptanalyst.png"
                                    alt=""
                                  />
                                  <a
                                    target="_blank"
                                    href="https://github.com/jaahaan/Cryptanalyst"
                                    ><i
                                      class="fa-solid fa-arrow-up-right-from-square icon"
                                    ></i
                                  ></a>
                                </div>
                              </div>
                            </div>

                            <div class="desc">
                              <span class="category"> Android App </span>
                              <h5 class="name">
                                Cryptanalyst
                                <!-- <a href="/work-single">Cryptanalyst</a> -->
                              </h5>
                              <div class="text">
                                <p>
                                  • Description: Implemented cryptographic
                                  algorithms such as Rail Fence, Row
                                  Transposition, Caesar Cipher, Playfair Cipher,
                                  Vernam Cipher, Vigenère Cipher And also one
                                  can calculate Modulo and Multiplicative
                                  Inverse.<br />
                                  • Technical Skills: JAVA, XML, Android Studio.
                                </p>
                              </div>
                              <!-- <a
                                class="lnk"
                                target="_blank"
                                href="https://github.com/jaahaan/Cryptanalyst"
                                >Source Code</a
                              > -->
                            </div>
                            <div
                              class="bg-img"
                              style="
                                background-image: url('assets/img/dot-2.png');
                              "
                            ></div>
                          </div>
                        </slide>
                        <slide>
                          <div class="project-single--item">
                            <div class="img-box">
                              <div class="bg-overlay"></div>
                              <div class="bg-image">
                                <img src="assets/img/lurc.png" alt="" />
                              </div>
                              <div class="demo-item">
                                <div class="image img">
                                  <img src="assets/img/lurc.png" alt="" />

                                  <a
                                    target="_blank"
                                    href="https://github.com/jaahaan/LU-ResearchCommunity"
                                    ><i
                                      class="fa-solid fa-arrow-up-right-from-square icon"
                                    ></i
                                  ></a>
                                </div>
                              </div>
                            </div>

                            <div class="desc">
                              <span class="category"> Website </span>
                              <h5 class="name">
                                LU Research Community
                                <!-- <a href="/work-single"
                                  >LU Research Community
                                </a> -->
                              </h5>
                              <div class="text">
                                <p>
                                  • Technical Skills: Laravel, NuxtJS, MySQL,
                                  PHP, JS, HTML, CSS, SASS, Bootsrtap.
                                </p>
                              </div>
                              <!-- <a
                                class="lnk"
                                target="_blank"
                                href="https://github.com/jaahaan/LU-ResearchCommunity"
                                >Source Code</a
                              > -->
                            </div>
                            <div
                              style="
                                background-image: url('assets/img/dot-2.png');
                              "
                            ></div>
                          </div>
                        </slide>
                        <slide>
                          <div class="project-single--item">
                            <div class="img-box">
                              <div class="bg-overlay"></div>
                              <div class="bg-image">
                                <img
                                  src="assets/img/menu_HelpMate.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="demo-item">
                                <div class="image img">
                                  <img
                                    src="assets/img/logo_HelpMate.png"
                                    alt=""
                                  />
                                  <a
                                    target="_blank"
                                    href="https://github.com/jaahaan/LuHelpmate"
                                    ><i
                                      class="fa-solid fa-arrow-up-right-from-square icon"
                                    ></i
                                  ></a>
                                </div>
                              </div>
                            </div>

                            <div class="desc">
                              <span class="category"> Android App </span>
                              <h5 class="name">
                                LU HelpMate
                                <!-- <a href="/work-single">LU HelpMate</a> -->
                              </h5>
                              <div class="text">
                                <p>
                                  • Technical Skills: JAVA, XML, Android Studio,
                                  Firebase.
                                </p>
                              </div>
                              <!-- <a
                                class="lnk"
                                target="_blank"
                                href="https://github.com/jaahaan/LuHelpmate"
                                >Source Code</a
                              > -->
                            </div>
                            <div
                              style="
                                background-image: url('assets/img/dot-2.png');
                              "
                            ></div>
                          </div>
                        </slide>
                        <hooper-pagination
                          slot="hooper-addons"
                        ></hooper-pagination>

                        <hooper-navigation
                          slot="hooper-addons"
                          class="hooper-relatedResearch_button"
                        ></hooper-navigation>
                      </hooper>
                    </div>
                  </div>
                  <!-- <div class="load-more-link">
                    <a
                      class="btn scrolla-element-anim-1 scroll-animate animate__active"
                      data-animate="active"
                      href="/works"
                      style="visibility: visible"
                      ><span>View More</span></a
                    >
                  </div> -->
                </div>
                <div class="l-bgtitle"><span> Portfolio </span></div>
              </div>
            </div>
          </section>
          <section class="section gradient-top" id="resume-section">
            <div class="l-heading reveal">
              <div class="container">
                <div class="m-titles align-center">
                  <h2
                    class="m-title splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 1; visibility: visible"
                  >
                    <span>
                      <span
                        class="word"
                        data-word="Resume"
                        style="--word-index: 0"
                        >Resume</span
                      >
                    </span>
                  </h2>
                  <div
                    class="m-subtitle splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span
                      ><span class="word" data-word="my" style="--word-index: 0"
                        >my</span
                      >
                      <b
                        ><span
                          class="word"
                          data-word="Story"
                          style="--word-index: 1"
                          >Story</span
                        ></b
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="v-line v-line-left reveal">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h5
                      class="history-title scrolla-element-anim-1 scroll-animate animate__active"
                      data-animate="active"
                      style="visibility: visible"
                    >
                      <span> Education </span>
                    </h5>
                    <div class="history-items">
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span> B.Sc. in CSE </span>
                        </h6>
                        <div class="history-content">
                          <div class="subname">
                            <span>Leading University</span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2019 - 2022 </span>
                          </div>
                          <div class="text">
                            <div>
                              <p>Ragibnagar, Sylhet, Bangladesh</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span> H.S.C. </span>
                        </h6>
                        <div class="history-content">
                          <div class="subname">
                            <span> Brindaban Govt. College </span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2016 - 2018 </span>
                          </div>
                          <div class="text">
                            <div>
                              <p>Habiganj Sadar, Sylhet, Bangladesh</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span> S.S.C. </span>
                        </h6>
                        <div class="history-content">
                          <div class="subname">
                            <span> B. K. G. C. Govt. Girls’ High School </span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2008 - 2016 </span>
                          </div>
                          <div class="text">
                            <div>
                              <p>Habiganj Sadar, Sylhet, Bangladesh</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h5
                      class="history-title scrolla-element-anim-1 scroll-animate animate__active"
                      data-animate="active"
                      style="visibility: visible"
                    >
                      <span> Experience </span>
                    </h5>
                    <div class="history-items">
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Adjunct Lecturer, Department of CSE</span>
                        </h6>
                        <div class="history-content">
                          <div class="subname">
                            <span>Leading University</span>
                          </div>
                          <div class="date l-subtitle">
                            <span>Aug 2023 - <b>Present</b></span>
                          </div>
                          <div class="text">
                            <div>
                              <p>Ragibnagar, Sylhet, Bangladesh</p>
                            </div>
                          </div>
                        </div>
                        <div
                          class="dot-bg-img"
                          style="background-image: url(assets/img/dot-1.png)"
                        ></div>
                        <div class="hero-shape hero-bottom-shape">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Web Developer (Internship)</span>
                        </h6>
                        <div class="history-content">
                          <div class="subname">
                            <span>TECHOFIC</span>
                          </div>
                          <div class="date l-subtitle">
                            <span>Aug 2022 - Jul 2023</span>
                          </div>
                          <div class="text">
                            <div>
                              <p>Remote</p>
                              <!-- <p>• Backend API using Laravel, AdonisJS.</p>
                              <p>• Frontend using VueJS and NuxtJS.</p>
                              <p>• MySql Database.</p>
                              <p>• Git, GitHub.</p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="l-bgtitle"><span> History </span></div>
              </div>
            </div>
          </section>
          <section class="section gradient-bottom" id="achievements-section">
            <div class="l-heading reveal">
              <div class="container">
                <div class="m-titles align-center">
                  <h2
                    class="m-title splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span>
                      <span
                        class="word"
                        data-word="Extra-curricular"
                        style="--word-index: 0"
                        >Extra-curricular Activities
                      </span>
                    </span>
                  </h2>
                  <div
                    class="m-subtitle splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 4; visibility: visible"
                  >
                    <span
                      ><span
                        class="word"
                        data-word="Activities"
                        style="--word-index: 0"
                        >My
                      </span>
                      <b
                        ><span
                          class="word"
                          data-word="And Achievements"
                          style="--word-index: 2"
                          >Achievements
                        </span></b
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="v-line v-line-left reveal">
              <div class="container">
                <div class="hero-shape hero-top-shape">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="history-items">
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Assistant IT Secretary</span>
                        </h6>
                        <div class="history-content pb-4">
                          <div class="achievement">
                            <span>Leading University Computer Club</span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2021 - 2022 </span>
                          </div>
                        </div>
                      </div>

                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>National Girls' Programming Contest</span>
                        </h6>
                        <div class="history-content pb-4">
                          <div class="achievement">
                            <span>Daffodil International University</span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2019 </span>
                          </div>
                        </div>
                      </div>

                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>7th Bangladesh Chemistry Olympiad</span>
                        </h6>
                        <div class="history-content pb-4">
                          <div class="achievement">
                            <span
                              >Shahjalal University of Science and
                              Technology</span
                            >
                          </div>
                          <div class="date l-subtitle">
                            <span> 2017 </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="history-items">
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>General Member</span>
                        </h6>
                        <div class="history-content pb-4">
                          <div class="achievement">
                            <span>Leading University Computer Club</span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2019 - 2020 </span>
                          </div>
                        </div>
                      </div>

                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>8th Bangladesh Chemistry Olympiad</span>
                        </h6>
                        <div class="history-content pb-4">
                          <div class="achievement">
                            <span
                              >Shahjalal University of Science and
                              Technology</span
                            >
                          </div>
                          <div class="date l-subtitle">
                            <span> 2018 </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Inter College Mathematical Olympiad</span>
                        </h6>
                        <div class="history-content pb-4">
                          <div class="achievement">
                            <span>Central Creative College</span>
                          </div>
                          <div class="date l-subtitle">
                            <span> 2017 </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="dot-bg-img"
                        style="background-image: url(assets/img/dot-2.png)"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="l-bgtitle"><span> Achievements </span></div>
              </div>
            </div>
          </section>
          <section class="section gradient-center" id="interests-section">
            <div class="l-heading reveal">
              <div class="container">
                <div class="m-titles align-center">
                  <h2
                    class="m-title splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 1; visibility: visible"
                  >
                    <span>
                      <span
                        class="word"
                        data-word="INTERESTS"
                        style="--word-index: 0"
                        >INTERESTS</span
                      >
                    </span>
                  </h2>
                  <div
                    class="m-subtitle splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span
                      ><span class="word" data-word="my" style="--word-index: 0"
                        >my</span
                      >
                      <b
                        ><span
                          class="word"
                          data-word="Passion"
                          style="--word-index: 1"
                          >Passion</span
                        ></b
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="v-line v-line-left reveal">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h5
                      class="history-title scrolla-element-anim-1 scroll-animate animate__active"
                      data-animate="active"
                      style="visibility: visible"
                    >
                      <span>Research Interests</span>
                    </h5>
                    <div class="history-items">
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span> Cryptography </span>
                        </h6>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Privacy and Security</span>
                        </h6>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Theory of Computation</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h5
                      class="history-title scrolla-element-anim-1 scroll-animate animate__active"
                      data-animate="active"
                      style="visibility: visible"
                    >
                      <span>Hobbies</span>
                    </h5>
                    <div class="history-items">
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Reading</span>
                        </h6>

                        <div
                          class="dot-bg-img"
                          style="background-image: url(assets/img/dot-1.png)"
                        ></div>
                        <div class="hero-shape hero-bottom-shape">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Teaching</span>
                        </h6>
                      </div>
                      <div
                        class="history-item l-collapse-item scroll-animate opened animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <h6 class="name l-collapse-btn active">
                          <span>Cycling</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="l-bgtitle"><span> Interests </span></div>
              </div>
            </div>
          </section>
          <section class="section gradient-top" id="contact-section">
            <div class="l-heading reveal">
              <div class="container">
                <div class="m-titles align-center">
                  <h2
                    class="m-title splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 2; visibility: visible"
                  >
                    <span>
                      <span
                        class="word"
                        data-word="Contact"
                        style="--word-index: 0"
                        >Contact </span
                      ><span class="whitespace"> </span
                      ><span class="word" data-word="Me" style="--word-index: 1"
                        >Me</span
                      >
                    </span>
                  </h2>
                  <div
                    class="m-subtitle splitting-text-anim-1 scroll-animate words splitting animate__active"
                    data-splitting="words"
                    data-animate="active"
                    style="--word-total: 4; visibility: visible"
                  >
                    <span
                      ><span
                        class="word"
                        data-word="Let’s"
                        style="--word-index: 0"
                        >Let’s</span
                      >
                      <b
                        ><span
                          class="word"
                          data-word="Talk"
                          style="--word-index: 1"
                          >Talk </span
                        ><span class="whitespace"> </span
                        ><span
                          class="word"
                          data-word="About"
                          style="--word-index: 2"
                          >About </span
                        ><span class="whitespace"> </span
                        ><span
                          class="word"
                          data-word="Ideas"
                          style="--word-index: 3"
                          >Ideas
                        </span></b
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="l-contacts v-line v-line-left reveal">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="numbers-items">
                      <div
                        class="numbers-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <div class="icon">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>

                        <div class="title"><span> Address </span></div>
                        <div class="l-text">
                          <span>
                            Master Quarter, Habiganj Sadar, Sylhet, Bangladesh
                          </span>
                        </div>
                      </div>
                      <div class="hero-shape hero-bottom-shape">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <!-- <div
                        class="numbers-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <div class="icon">
                          <i class="lab la-linkedin-in"></i>
                        </div>
                        <div class="title"><span> LinkedIn </span></div>
                        <div class="l-text">
                          <span> -jaahaan- </span>
                        </div>
                      </div>

                      <div
                        class="numbers-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <div class="icon">
                          <i class="lab la-github"></i>
                        </div>
                        <div class="title"><span> Github </span></div>
                        <div class="l-text">
                          <span> njlisa25@gmail.com </span>
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <!-- <div
                      class="contacts-form scrolla-element-anim-1 scroll-animate animate__active"
                      data-animate="active"
                      style="visibility: visible"
                    >
                      <div
                        class="bg-img"
                        style="background-image: url(assets/img/dot-1.png)"
                      ></div>
                      <div class="contacts-form">
                        <form id="cform">
                          <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                              <div class="group">
                                <label
                                  >Your Full Name <b>*</b
                                  ><input type="text" name="name"
                                /></label>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                              <div class="group">
                                <label
                                  >Your Email Address <b>*</b
                                  ><input type="email" name="email"
                                /></label>
                              </div>
                            </div>
                            <div
                              class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            >
                              <div class="group">
                                <label
                                  >Your Subject <b>*</b
                                  ><input type="text" name="subject"
                                /></label>
                              </div>
                            </div>
                            <div
                              class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            >
                              <div class="group">
                                <label
                                  >Your Message <b>*</b
                                  ><textarea name="message"></textarea>
                                </label>
                              </div>
                            </div>
                            <div
                              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right"
                            >
                              <a href="#" class="btn"
                                ><span>Send Message</span></a
                              >
                            </div>
                          </div>
                        </form>
                        <div class="alert-success" style="display: none">
                          <p>Thanks, your message is sent successfully.</p>
                        </div>
                      </div>
                    </div> -->
                    <div class="numbers-items">
                      <div
                        class="numbers-item scrolla-element-anim-1 scroll-animate animate__active"
                        data-animate="active"
                        style="visibility: visible"
                      >
                        <div class="icon">
                          <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="title"><span> Email </span></div>
                        <div class="l-text">
                          <a
                            class="ga-events"
                            data-eventcategory="Mail from footer"
                            data-eventaction="Click to action"
                            data-eventlabel="njlisa25@gmail.com"
                            href="mailto:njlisa25@gmail.com"
                          >
                            njlisa25@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="l-bgtitle"><span> Contact Me </span></div>
              </div>
            </div>
          </section>
          <footer>
            <div class="footer-section">
              <div class="info">
                <div class="container">
                  <div class="info-item">
                    <div class="footer-copyright">
                      Copyright
                      <span><i class="fa-solid fa-copyright"></i></span>
                      {{ new Date().getFullYear() }}
                      <strong>Nargish Jahan</strong> all rights reserved
                    </div>

                    <div class="footer-logo">
                      <div class="footer-contact row">
                        <div class="single-item col-auto">
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.facebook.com/jaaahaaan/"
                          >
                            <i
                              aria-hidden="true"
                              class="lab la-facebook-f"
                            ></i></a
                          ><a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.linkedin.com/in/-jaahaan-/"
                            ><i
                              aria-hidden="true"
                              class="lab la-linkedin-in"
                            ></i></a
                          ><a
                            target="_blank"
                            rel="nofollow"
                            href="https://github.com/jaahaan"
                            ><i class="lab la-github"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <script id="__NEXT_DATA__" type="application/json">
      {
        "props": { "pageProps": {} },
        "page": "/",
        "query": {},
        "buildId": "SKLVPhfJPi6LDgoI7LWSw",
        "nextExport": true,
        "autoExport": true,
        "isFallback": false,
        "scriptLoader": []
      }
    </script>
  </body>
</template>

<script>
import "animate.css";
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      typer: ["Teacher", "Software Engineer"],
      isSidebar: false,
      userInfo: [],
      ServiceTitle: [],
      skillInfo: [],
      projectInfo: [],

      project: {
        itemsToShow: 1,
        centerMode: false,
        // itemsToSlide : 3,
        breakpoints: {
          450: {
            centerMode: false,
            itemsToShow: 1,
          },
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 2,
          },
        },
      },
    };
  },
  methods: {
    reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    showSidebar() {
      this.isSidebar = !this.isSidebar;
    },
    hideSidebar(e) {
      if (this.isSidebar) {
        let target = e.target;
        var source = this.$refs.sidebarSource;

        if (!source.contains(target)) {
          this.isSidebar = false;
        }
      }
    },
    async getUserInfo() {
      const res = await this.callApi("get", "/api/user");
      if (res.status == 200) {
        this.userInfo = res.data[0];
        console.log(this.userInfo);
      }
    },

    async getService() {
      const res = await this.callApi("get", "/api/services");
      if (res.status == 200) {
        this.ServiceTitle = res.data;
        console.log(this.ServiceTitle);
      }
    },

    async getSpecialSkill() {
      const res = await this.callApi("get", "/api/special_skills");
      if (res.status == 200) {
        this.skillInfo = res.data;
        console.log(this.skillInfo);
      }
    },

    async getProject() {
      const res = await this.callApi("get", "/api/projects");
      if (res.status == 200) {
        this.projectInfo = res.data;
        console.log(this.projectInfo);
      }
    },
  },
  async created() {
    // this.getUserInfo();
    // this.getService();
    // this.getSpecialSkill();
    // this.getProject();
  },
  mounted() {
    window.addEventListener("scroll", this.reveal);
    document.addEventListener("click", this.hideSidebar);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSidebar);
  },
};
</script>
