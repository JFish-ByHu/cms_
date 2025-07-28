<template>
  <div class="home">
    <header class="header">
      <h1>Hello World</h1>
      <p>This is a test</p>
      <nav class="nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/admin" class="nav-link admin-link"
          >管理后台</router-link
        >
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.header {
  text-align: center;
  padding: 60px 20px 40px;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 30px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.admin-link {
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
}
</style>
