document.addEventListener("DOMContentLoaded", () => {

  // ─── Mostrar/ocultar senha ───────────────────────────────────────
  const passwordInput = document.getElementById("password");
  const showError = document.getElementById("")


  // ─── Validação + Envio via fetch ─────────────────────────────────
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value.trim();

    // Validação básica
    if (!username) {
      showError("Por favor, insira seu e-mail ou nome de usuário.");
      return;
    }

    if (username.includes("@") && !isValidEmail(username)) {
      showError("E-mail inválido.");
      return;
    }
    
    if (!username.includes("@")){
      showError("E-mail inválido.");
      return;
    }

    if (!password) {
      showError("Por favor, insira sua senha.");
      return;
    }

    if (password.length < 6) {
      showError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    clearError();

    // Envio via fetch
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // ✅ Login bem-sucedido → redireciona
        window.location.href = "/dashboard"; // troque pelo caminho correto
      } else {
        const data = await response.json();
        showError(data.message || "Usuário ou senha incorretos.");
      }

    } catch (err) {
      showError("Erro de conexão. Tente novamente.");
      console.error(err);
    }
  });


  // ─── Funções auxiliares ──────────────────────────────────────────
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(msg) {
    let errorEl = document.getElementById("login-error");
    if (!errorEl) {
      errorEl = document.createElement("p");
      errorEl.id = "login-error";
      errorEl.style.cssText = "color: red; font-size: 14px; margin-top: -10px;";
      form.prepend(errorEl);
    }
    errorEl.textContent = msg;
  }

  function clearError() {
    const errorEl = document.getElementById("login-error");
    if (errorEl) errorEl.remove();
  }

});