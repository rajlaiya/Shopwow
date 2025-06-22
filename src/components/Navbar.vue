<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <a href="#" class="logo">Shopwow</a>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/about">About</router-link></li>
      <li class="dropdown">
        <a href="#" class="dropbtn" @click.prevent="toggleDropdown">Shop <span class="arrow">▼</span></a>
        <div class="dropdown-content" v-if="showDropdown" ref="dropdownMenu">
          <router-link to="/man" @click.native="closeDropdown">Man</router-link>
          <router-link to="/woman" @click.native="closeDropdown">Woman</router-link>
          <router-link to="/children" @click.native="closeDropdown">Children</router-link>
        </div>
      </li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    },
    handleClickOutside(event) {
      if (this.showDropdown && this.$refs.dropdownMenu && !this.$refs.dropdownMenu.contains(event.target) && !this.$el.querySelector('.dropbtn').contains(event.target)) {
        this.closeDropdown();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.7); /* transparent white */
  backdrop-filter: blur(8px);
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  height: 64px;
  overflow-x: visible;
  transition: background 0.3s;
}
.navbar-logo .logo {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  letter-spacing: 2px;
}
.navbar-links {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.navbar-links li {
  margin-left: 2rem;
  position: relative;
}
.navbar-links a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;
}
.navbar-links a:hover {
  color: #e67e22;
}
.dropdown .dropbtn {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.arrow {
  margin-left: 0.3em;
  font-size: 0.8em;
}
.dropdown-content {
  display: block;
  position: absolute;
  background: #fff;
  min-width: 140px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  z-index: 1;
  top: 2.5rem;
  left: 0;
  border-radius: 0 0 8px 8px;
}
.dropdown-content a {
  color: #2c3e50;
  padding: 0.8rem 1.2rem;
  display: block;
  text-align: left;
  font-size: 1rem;
  border-bottom: 1px solid #f2f2f2;
}
.dropdown-content a:last-child {
  border-bottom: none;
}
.dropdown-content a:hover {
  background: #f9f9f9;
  color: #e67e22;
}
body, html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
#app {
  padding-top: 64px;
  overflow-x: hidden;
}
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 1rem;
    width: 100vw;
    right: 0;
  }
  .navbar-links {
    flex-direction: column;
    width: 100%;
  }
  .navbar-links li {
    margin: 1rem 0 0 0;
  }
}
</style>
