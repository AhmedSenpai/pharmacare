<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PharmaCare - Connexion Professionnelle</title>
    <link rel="stylesheet" href="styleslog.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="background">
        <div class="floating-pills">
            <div class="pill pill-1"></div>
            <div class="pill pill-2"></div>
            <div class="pill pill-3"></div>
            <div class="pill pill-4"></div>
            <div class="pill pill-5"></div>
        </div>
    </div>

    <div class="container">
        <div class="auth-card">
            <div class="logo-section">
                <div class="logo">
                    <i class="fas fa-pills"></i>
                    <span>PharmaCare</span>
                </div>
                <p class="subtitle">Plateforme Professionnelle</p>
            </div>

            <div class="form-container">
                <!-- Login Form -->
                <form class="auth-form active" id="loginForm">
                    <h2>Connexion</h2>
                    <p class="form-subtitle">Accédez à votre espace professionnel</p>
                    
                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email professionnel" required>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Mot de passe" required>
                            <button type="button" class="toggle-password">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                            Se souvenir de moi
                        </label>
                        <a href="#" class="forgot-password">Mot de passe oublié ?</a>
                    </div>

                    <button type="submit" class="btn-primary">
                        <span>Se connecter</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>

                    <div class="form-footer">
                        <p>Pas encore de compte ? 
                            <a href="#" class="switch-form" data-target="registerForm">S'inscrire</a>
                        </p>
                    </div>
                </form>

                <!-- Register Form -->
                <form class="auth-form" id="registerForm">
                    <h2>Inscription</h2>
                    <p class="form-subtitle">Rejoignez notre réseau professionnel</p>
                    
                    <div class="input-row">
                        <div class="input-group">
                            <div class="input-wrapper">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Prénom" required>
                            </div>
                        </div>
                        <div class="input-group">
                            <div class="input-wrapper">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Nom" required>
                            </div>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email professionnel" required>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-briefcase"></i>
                            <select required>
                                <option value="">Sélectionnez votre fonction</option>
                                <option value="pharmacien">Pharmacien titulaire</option>
                                <option value="adjoint">Pharmacien adjoint</option>
                                <option value="preparateur">Préparateur en pharmacie</option>
                                <option value="etudiant">Étudiant en pharmacie</option>
                            </select>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-building"></i>
                            <input type="text" placeholder="Nom de la pharmacie" required>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Mot de passe" required>
                            <button type="button" class="toggle-password">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Confirmer le mot de passe" required>
                        </div>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" required>
                            <span class="checkmark"></span>
                            J'accepte les <a href="#">conditions d'utilisation</a>
                        </label>
                    </div>

                    <button type="submit" class="btn-primary">
                        <span>Créer mon compte</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>

                    <div class="form-footer">
                        <p>Déjà un compte ? 
                            <a href="#" class="switch-form" data-target="loginForm">Se connecter</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="scriptlog.js"></script>
</body>
</html>