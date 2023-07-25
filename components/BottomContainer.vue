<template>
  <footer>
    <div class="footer-section">
      <div class="info">
        <div class="container">
          <div class="info-item">
            <div class="footer-copyright">
              Copyright <span><i class="fa-solid fa-copyright"></i></span>
              {{ new Date().getFullYear() }} <strong>Nargish Jahan</strong> all
              rights reserved
            </div>

            <div class="footer-logo">
              <div class="footer-contact row">
                <div class="single-item col-auto">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.facebook.com/jaaahaaan/"
                  >
                    <i aria-hidden="true" class="lab la-facebook-f"></i></a
                  ><a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.linkedin.com/in/-jaahaan-/"
                    ><i aria-hidden="true" class="lab la-linkedin-in"></i></a
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
</template>
<script>
export default {
  name: "BottomContainer",
  data() {
    return {
      contactInfo: [],
    };
  },
};
</script>
