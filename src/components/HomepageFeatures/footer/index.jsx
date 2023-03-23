import React from 'react'

function Footer() {
  return (
    <footer class="footer footer--dark">
    <div class="container container--fluid">
      <div class="row footer__links">
        <div class="col footer__col">
          <h4 class="footer__title">Docs</h4>
          <ul class="footer__items">
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Getting Started</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">API</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="col footer__col">
          <h4 class="footer__title">Community</h4>
          <ul class="footer__items">
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Users</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Contribute</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Stack Overflow</a>
            </li>
          </ul>
        </div>
        <div class="col footer__col">
          <h4 class="footer__title">Social</h4>
          <ul class="footer__items">
            <li class="footer__item">
              <a class="footer__link-item" href="#url">GitHub</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Facebook</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="col footer__col">
          <h4 class="footer__title">More</h4>
          <ul class="footer__items">
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Tutorial</a>
            </li>
            <li class="footer__item">
              <a class="footer__link-item" href="#url">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="text--center">
        <div class="margin-bottom--sm">
          <img
            class="footer__logo"
            alt="Meta Open Source Logo"
            src="/img/meta_opensource_logo_negative.svg" />
        </div>
        Copyright © 2022 Meta Platforms, Inc.
      </div>
    </div>
  </footer>
  )
}

export default Footer
