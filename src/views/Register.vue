<template>
  <div class="container mt-0">
    <div class="row d-flex flex-row justify-content-center">
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <form role="form" @submit.prevent="register" method="POST">
          <h2>Please Sign Up</h2>
          <hr class="colorgraph" />
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 mb-1">
              <div class="form-group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  class="form-control input-lg"
                  placeholder="First Name"
                  tabindex="1"
                  v-model="firstName"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 mb-1">
              <div class="form-group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  v-model="lastName"
                  class="form-control input-lg"
                  placeholder="Last Name"
                  tabindex="2"
                />
              </div>
            </div>
          </div>

          <div class="form-group mb-1">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control input-lg"
              placeholder="Email Address"
              tabindex="4"
              v-model="email"
            />
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mb-1">
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  class="form-control input-lg"
                  placeholder="Password"
                  tabindex="5"
                />
              </div>
            </div>
          </div>

          <hr class="colorgraph" />
          <div class="row">
            <div class="col-xs-12 col-md-6">
                  <button type="submit" class="btn2 btn btn-block btn-lg">Register </button>
            </div>
            <div class="col-xs-12 col-md-6">
              <a href="/login" class="btn2 btn btn-block btn-lg">Sign In</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
$(function () {
  $(".button-checkbox").each(function () {
    // Settings
    var $widget = $(this),
      $button = $widget.find("button"),
      $checkbox = $widget.find("input:checkbox"),
      color = $button.data("color"),
      settings = {
        on: {
          icon: "glyphicon glyphicon-check",
        },
        off: {
          icon: "glyphicon glyphicon-unchecked",
        },
      };

    // Event Handlers
    $button.on("click", function () {
      $checkbox.prop("checked", !$checkbox.is(":checked"));
      $checkbox.triggerHandler("change");
      updateDisplay();
    });
    $checkbox.on("change", function () {
      updateDisplay();
    });

    // Actions
    function updateDisplay() {
      var isChecked = $checkbox.is(":checked");

      // Set the button's state
      $button.data("state", isChecked ? "on" : "off");

      // Set the button's icon
      $button
        .find(".state-icon")
        .removeClass()
        .addClass("state-icon " + settings[$button.data("state")].icon);

      // Update the button's color
      if (isChecked) {
        $button.removeClass("btn-default").addClass("btn-" + color + " active");
      } else {
        $button.removeClass("btn-" + color + " active").addClass("btn-default");
      }
    }

    // Initialization
    function init() {
      updateDisplay();

      // Inject the icon if applicable
      if ($button.find(".state-icon").length == 0) {
        $button.prepend(
          '<i class="state-icon ' +
            settings[$button.data("state")].icon +
            '"></i>'
        );
      }
    }
    init();
  });
});
export default {
  data() {
    // insert data into empty array
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.btn-check:active + .btn-info,
.btn-check:checked + .btn-info,
.btn-info.active,
.btn-info:active,
.show > .btn-info.dropdown-toggle {
  color: #22b1b1;
  background-color: #2f7474;
  border-color: #2f7474;
}
.btn-info {
  color: #22b1b1;
  background-color: #2f7474;
  border-color: #2f7474;
}
.btn-info.active {
  color: #22b1b1;
  background-color: #2f7474;
  border-color: #2f7474;
}
#t_and_c.hidden {
  color: #2f7474;
}
h2 {
  color: #2f7474;
}
.colorgraph {
  height: px;
  border-top: 0;
  background: #f9f5f2;
  border-radius: 5px;
}
.btn1 {
  color: #22b1b1;
  border-color: #2f7474;
}
.btn2 {
  color: #22b1b1;
  border-color: #2f7474;
}
.btn1:hover {
  color: #2f7474;
}
.btn2:hover {
  color: #2f7474;
}
.btn-c {
  color: #22b1b1;
  border-color: #2f7474;
}
/* .btn-c:hover{
        background-color:#dd4e4f;
  } */
/* .btn:hover{
        color: #dd4e4f; 
  } */
.button > btn-info active {
  color: #2f7474;
}
a:hover {
  color: #2f7474;
}

a {
  color: #22b1b1;
}
</style>
