import React from 'react'
import Footer from '../../components/HomepageFeatures/footer'

function Homepage() {
  return (
    <div>
      <nav class="navbar navbar--dark">
      <div class="navbar__inner">
        <div class="navbar__items">
          <a class="navbar__brand">C ink</a>
          <div class="navbar__item dropdown dropdown--hoverable">
            <a class="navbar__item navbar__link" href="#url">v2.0</a>
            <ul class="dropdown__menu">
              <li>
                <a class="dropdown__link" href="#url">v1.8.0</a>
              </li>
              <li>
                <a class="dropdown__link" href="#url">v1.7.0</a>
              </li>
              <li>
                <a class="dropdown__link" href="#url">v1.6.0</a>
              </li>
              <li>
                <a class="dropdown__link" href="#url">All Versions</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar__items navbar__items--right">
          <a class="navbar__item navbar__link" href="#url">Docs</a>
          <a class="navbar__item navbar__link" href="#url">Tutorial</a>
            <form>
            <div class="navbar__search">
              <input class="navbar__search-input" placeholder="Search" />
            </div>
            </form>
          </div>
        </div>
      </nav>
      <Footer />
    </div>
    
  )
}

export default Homepage
