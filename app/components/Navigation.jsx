var React = require('react');
var {Link,IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div>
      <div>
        <div>
          <div class="top-bar">
              <div class="top-bar-left">
                <ul class="menu" data-dropdown-menu>
                  <li class="menu-text">React Timer</li>
                  <li>
                    <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                  </li>
                  <li>
                    <Link to="/" activeClassName="active-link">Countdown</Link>
                  </li>
                </ul>
              </div>
              <div class="top-bar-right">
                <ul class="menu">
                  <li class="menu-text">
                    Create by Henry
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Navigation;
