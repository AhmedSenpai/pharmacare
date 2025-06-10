<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PharmaStock - Gestion de Stocks</title>
    <link rel="stylesheet" href="stylesstock.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-pills"></i>
                    <span>PharmaStock</span>
                </div>
                <button class="sidebar-toggle" id="sidebarToggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <nav class="sidebar-nav">
                <ul>
                    <li class="nav-item active" data-section="dashboard">
                        <a href="#dashboard">
                            <i class="fas fa-chart-pie"></i>
                            <span>Tableau de Bord</span>
                        </a>
                    </li>
                    <li class="nav-item" data-section="inventory">
                        <a href="#inventory">
                            <i class="fas fa-boxes"></i>
                            <span>Inventaire</span>
                        </a>
                    </li>
                    <li class="nav-item" data-section="orders">
                        <a href="#orders">
                            <i class="fas fa-shopping-cart"></i>
                            <span>Commandes</span>
                        </a>
                    </li>
                    <li class="nav-item" data-section="suppliers">
                        <a href="#suppliers">
                            <i class="fas fa-truck"></i>
                            <span>Fournisseurs</span>
                        </a>
                    </li>
                    <li class="nav-item" data-section="reports">
                        <a href="#reports">
                            <i class="fas fa-chart-bar"></i>
                            <span>Rapports</span>
                        </a>
                    </li>
                    <li class="nav-item" data-section="traceability">
                        <a href="#traceability">
                            <i class="fas fa-search-plus"></i>
                            <span>Traçabilité</span>
                        </a>
                    </li>
                    <li class="nav-item" data-section="settings">
                        <a href="#settings">
                            <i class="fas fa-cog"></i>
                            <span>Paramètres</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Header -->
            <header class="header">
                <div class="header-left">
                    <h1 class="page-title" id="pageTitle">Tableau de Bord</h1>
                </div>
                <div class="header-right">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Rechercher...">
                    </div>
                    <div class="notifications">
                        <button class="notification-btn">
                            <i class="fas fa-bell"></i>
                            <span class="notification-badge">3</span>
                        </button>
                    </div>
                    <div class="user-profile" id="userProfile">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=pharmacist" alt="Profil">
                        <span>Dr. Martin</span>
                        <i class="fas fa-chevron-down"></i>
                        <div class="user-dropdown" id="userDropdown">
                            <div class="dropdown-header">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=pharmacist" alt="Profil">
                                <div>
                                    <h4>Dr. Martin</h4>
                                    <p>Pharmacien Responsable</p>
                                </div>
                            </div>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item" id="profileSettingsBtn">
                                    <i class="fas fa-user-edit"></i>
                                    <span>Mon Profil</span>
                                </a>
                                <a href="#" class="dropdown-item" id="preferencesBtn">
                                    <i class="fas fa-cog"></i>
                                    <span>Préférences</span>
                                </a>
                                <a href="#" class="dropdown-item" id="notificationSettingsBtn">
                                    <i class="fas fa-bell"></i>
                                    <span>Notifications</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item" id="helpBtn">
                                    <i class="fas fa-question-circle"></i>
                                    <span>Aide & Support</span>
                                </a>
                                <a href="#" class="dropdown-item" id="logoutBtn">
                                    <i class="fas fa-sign-out-alt"></i>
                                    <span>Se Déconnecter</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Content Sections -->
            <div class="content-wrapper">
                <!-- Dashboard Section -->
                <section id="dashboard" class="content-section active">
                    <!-- Alerts Section -->
                    <div class="alerts-section">
                        <div class="alerts-container" id="alertsContainer">
                            <!-- Alerts will be populated by JavaScript -->
                        </div>
                    </div>

                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-pills"></i>
                            </div>
                            <div class="stat-content">
                                <h3>2,847</h3>
                                <p>Produits en Stock</p>
                                <span class="stat-change positive">+12%</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div class="stat-content">
                                <h3>23</h3>
                                <p>Stock Faible</p>
                                <span class="stat-change negative">-5%</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-calendar-times"></i>
                            </div>
                            <div class="stat-content">
                                <h3>8</h3>
                                <p>Produits Expirés</p>
                                <span class="stat-change negative">+2</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">
                                <i class="fas fa-euro-sign"></i>
                            </div>
                            <div class="stat-content">
                                <h3>€47,231</h3>
                                <p>Valeur Stock</p>
                                <span class="stat-change positive">+8%</span>
                            </div>
                        </div>
                    </div>

                    <div class="dashboard-grid">
                        <div class="chart-container">
                            <h3>Évolution des Ventes</h3>
                            <canvas id="salesChart"></canvas>
                        </div>
                        <div class="recent-activity">
                            <h3>Activité Récente</h3>
                            <div class="activity-list">
                                <div class="activity-item">
                                    <i class="fas fa-plus-circle"></i>
                                    <div>
                                        <p>Nouveau stock: Paracétamol 500mg</p>
                                        <span>Il y a 2 heures</span>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <i class="fas fa-minus-circle"></i>
                                    <div>
                                        <p>Stock faible: Aspirine 100mg</p>
                                        <span>Il y a 4 heures</span>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <i class="fas fa-truck"></i>
                                    <div>
                                        <p>Livraison reçue de PharmaCorp</p>
                                        <span>Hier</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Inventory Section -->
                <section id="inventory" class="content-section">
                    <div class="section-header">
                        <h2>Inventaire</h2>
                        <button class="btn btn-primary" id="addProductBtn">
                            <i class="fas fa-plus"></i>
                            Ajouter Produit
                        </button>
                    </div>
                    
                    <div class="filters">
                        <select class="filter-select">
                            <option>Toutes catégories</option>
                            <option>Médicaments</option>
                            <option>Vitamines</option>
                            <option>Matériel médical</option>
                        </select>
                        <select class="filter-select">
                            <option>Tous les statuts</option>
                            <option>En stock</option>
                            <option>Stock faible</option>
                            <option>Rupture</option>
                        </select>
                    </div>

                    <div class="table-container">
                        <table class="data-table" id="inventoryTable">
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Catégorie</th>
                                    <th>Stock</th>
                                    <th>Prix</th>
                                    <th>Expiration</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Data will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Orders Section -->
                <section id="orders" class="content-section">
                    <div class="section-header">
                        <h2>Commandes</h2>
                        <div class="section-header-buttons">
                            <button class="btn btn-secondary" id="importOrdersBtn">
                                <i class="fas fa-file-excel"></i>
                                Importer Excel
                            </button>
                            <button class="btn btn-primary" id="newOrderBtn">
                                <i class="fas fa-plus"></i>
                                Nouvelle Commande
                            </button>
                        </div>
                    </div>
                    <div class="orders-content">
                        <p>Section des commandes en cours de développement...</p>
                        <!-- Order list or cards will go here -->
                    </div>
                </section>

                <!-- Suppliers Section -->
                <section id="suppliers" class="content-section">
                    <div class="section-header">
                        <h2>Fournisseurs</h2>
                        <div class="section-header-buttons">
                            <button class="btn btn-secondary" id="importSuppliersBtn">
                                <i class="fas fa-file-excel"></i>
                                Importer Excel
                            </button>
                            <button class="btn btn-primary" id="addSupplierTriggerBtn">
                                <i class="fas fa-plus"></i>
                                Ajouter Fournisseur
                            </button>
                        </div>
                    </div>
                    <div class="suppliers-content">
                        <p>Section des fournisseurs en cours de développement...</p>
                        <!-- Supplier list or cards will go here -->
                    </div>
                </section>

                <!-- Reports Section -->
                <section id="reports" class="content-section">
                    <div class="section-header">
                        <h2>Rapports</h2>
                        <button class="btn btn-primary" id="generateReportBtn">
                            <i class="fas fa-chart-line"></i>
                            Générer Rapport
                        </button>
                    </div>
                    
                    <div class="reports-content">
                        <div class="reports-grid">
                            <!-- Report Configuration Panel -->
                            <div class="report-config-panel">
                                <h3>Configuration du Rapport</h3>
                                <form id="reportConfigForm">
                                    <div class="form-group">
                                        <label for="reportTypeSelect">Type de Rapport</label>
                                        <select id="reportTypeSelect" name="reportType" required>
                                            <option value="">Sélectionner un type</option>
                                            <option value="inventory">Inventaire Complet</option>
                                            <option value="sales">Rapport des Ventes</option>
                                            <option value="stock-movements">Mouvements de Stock</option>
                                            <option value="low-stock">Produits à Stock Faible</option>
                                            <option value="expired">Produits Expirés</option>
                                            <option value="expiring-soon">Produits Proches Expiration</option>
                                            <option value="suppliers">Rapport Fournisseurs</option>
                                            <option value="orders">Historique Commandes</option>
                                            <option value="financial">Rapport Financier</option>
                                            <option value="analytics">Analyses & Statistiques</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="reportStartDate">Date de Début</label>
                                            <input type="date" id="reportStartDate" name="startDate">
                                        </div>
                                        <div class="form-group">
                                            <label for="reportEndDate">Date de Fin</label>
                                            <input type="date" id="reportEndDate" name="endDate">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="categoryFilter">Filtrer par Catégorie</label>
                                        <select id="categoryFilter" name="category">
                                            <option value="">Toutes les catégories</option>
                                            <option value="Médicaments">Médicaments</option>
                                            <option value="Vitamines">Vitamines</option>
                                            <option value="Matériel médical">Matériel médical</option>
                                            <option value="Cosmétiques">Cosmétiques</option>
                                            <option value="Autres">Autres</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="supplierFilter">Filtrer par Fournisseur</label>
                                        <select id="supplierFilter" name="supplier">
                                            <option value="">Tous les fournisseurs</option>
                                            <!-- Options will be populated by JavaScript -->
                                        </select>
                                    </div>
                                    
                                    <div class="form-group checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" id="includeGraphs" name="includeGraphs" checked>
                                            <span class="checkbox-custom"></span>
                                            Inclure les graphiques
                                        </label>
                                    </div>
                                    
                                    <div class="form-group checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" id="includeDetails" name="includeDetails" checked>
                                            <span class="checkbox-custom"></span>
                                            Inclure les détails produits
                                        </label>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="reportFormat">Format d'Export</label>
                                        <select id="reportFormat" name="format" required>
                                            <option value="pdf">PDF</option>
                                            <option value="excel">Excel (.xlsx)</option>
                                            <option value="csv">CSV</option>
                                            <option value="json">JSON</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-actions">
                                        <button type="button" class="btn btn-secondary" id="previewReportBtn">
                                            <i class="fas fa-eye"></i>
                                            Aperçu
                                        </button>
                                        <button type="submit" class="btn btn-primary">
                                            <i class="fas fa-download"></i>
                                            Générer & Télécharger
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            <!-- Report Preview Panel -->
                            <div class="report-preview-panel">
                                <h3>Aperçu du Rapport</h3>
                                <div class="report-preview-content" id="reportPreviewContent">
                                    <div class="preview-placeholder">
                                        <i class="fas fa-chart-area"></i>
                                        <h4>Sélectionnez un type de rapport</h4>
                                        <p>Choisissez un type de rapport et cliquez sur "Aperçu" pour voir le contenu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Quick Reports Section -->
                        <div class="quick-reports-section">
                            <h3>Rapports Rapides</h3>
                            <div class="quick-reports-grid">
                                <div class="quick-report-card" data-report="today-sales">
                                    <div class="quick-report-icon">
                                        <i class="fas fa-cash-register"></i>
                                    </div>
                                    <div class="quick-report-content">
                                        <h4>Ventes du Jour</h4>
                                        <p>Rapport des ventes d'aujourd'hui</p>
                                    </div>
                                    <button class="btn btn-secondary btn-sm">Générer</button>
                                </div>
                                
                                <div class="quick-report-card" data-report="weekly-stock">
                                    <div class="quick-report-icon">
                                        <i class="fas fa-boxes"></i>
                                    </div>
                                    <div class="quick-report-content">
                                        <h4>Stock Hebdomadaire</h4>
                                        <p>Évolution du stock cette semaine</p>
                                    </div>
                                    <button class="btn btn-secondary btn-sm">Générer</button>
                                </div>
                                
                                <div class="quick-report-card" data-report="alerts-summary">
                                    <div class="quick-report-icon">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="quick-report-content">
                                        <h4>Résumé des Alertes</h4>
                                        <p>Alertes actives et historique</p>
                                    </div>
                                    <button class="btn btn-secondary btn-sm">Générer</button>
                                </div>
                                
                                <div class="quick-report-card" data-report="supplier-performance">
                                    <div class="quick-report-icon">
                                        <i class="fas fa-truck"></i>
                                    </div>
                                    <div class="quick-report-content">
                                        <h4>Performance Fournisseurs</h4>
                                        <p>Analyse des livraisons et qualité</p>
                                    </div>
                                    <button class="btn btn-secondary btn-sm">Générer</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Scheduled Reports Section -->
                        <div class="scheduled-reports-section">
                            <div class="section-header">
                                <h3>Rapports Programmés</h3>
                                <button class="btn btn-primary btn-sm" id="addScheduledReportBtn">
                                    <i class="fas fa-plus"></i>
                                    Programmer Rapport
                                </button>
                            </div>
                            <div class="scheduled-reports-list" id="scheduledReportsList">
                                <!-- Scheduled reports will be populated by JavaScript -->
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Traceability Section -->
                <section id="traceability" class="content-section">
                    <div class="section-header">
                        <h2>Traçabilité</h2>
                        <div class="section-header-buttons">
                            <button class="btn btn-primary" id="addBatchBtn">
                                <i class="fas fa-plus"></i>
                                Nouveau Lot
                            </button>
                            <button class="btn btn-secondary" id="exportTraceabilityBtn">
                                <i class="fas fa-download"></i>
                                Exporter Historique
                            </button>
                        </div>
                    </div>
                    
                    <div class="traceability-filters">
                        <input type="text" id="batchSearchInput" placeholder="Rechercher par n° de lot ou série..." class="filter-input">
                        <select class="filter-select" id="movementTypeFilter">
                            <option value="">Tous les mouvements</option>
                            <option value="entry">Entrée</option>
                            <option value="exit">Sortie</option>
                            <option value="transfer">Transfert</option>
                            <option value="adjustment">Ajustement</option>
                        </select>
                        <input type="date" id="dateFromFilter" class="filter-input">
                        <input type="date" id="dateToFilter" class="filter-input">
                    </div>

                    <div class="traceability-grid">
                        <div class="batch-overview">
                            <h3>Lots Actifs</h3>
                            <div class="batch-cards" id="batchCards">
                                <!-- Batch cards will be populated by JavaScript -->
                            </div>
                        </div>
                        
                        <div class="movement-history">
                            <h3>Historique des Mouvements</h3>
                            <div class="table-container">
                                <table class="data-table" id="movementHistoryTable">
                                    <thead>
                                        <tr>
                                            <th>Date/Heure</th>
                                            <th>Produit</th>
                                            <th>N° de Lot</th>
                                            <th>N° de Série</th>
                                            <th>Type</th>
                                            <th>Quantité</th>
                                            <th>Utilisateur</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- Movement history will be populated by JavaScript -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Settings Section -->
                <section id="settings" class="content-section">
                    <div class="section-header">
                        <h2>Paramètres</h2>
                    </div>
                    <div class="settings-content">
                        <div class="settings-grid">
                            <div class="settings-sidebar">
                                <div class="settings-nav">
                                    <div class="settings-nav-item active" data-settings-tab="system">
                                        <i class="fas fa-cog"></i>
                                        <span>Système</span>
                                    </div>
                                    <div class="settings-nav-item" data-settings-tab="users">
                                        <i class="fas fa-users"></i>
                                        <span>Comptes Utilisateurs</span>
                                    </div>
                                    <div class="settings-nav-item" data-settings-tab="pharmacy">
                                        <i class="fas fa-store"></i>
                                        <span>Information Pharmacie</span>
                                    </div>
                                    <div class="settings-nav-item" data-settings-tab="security">
                                        <i class="fas fa-shield-alt"></i>
                                        <span>Sécurité</span>
                                    </div>
                                    <div class="settings-nav-item" data-settings-tab="backup">
                                        <i class="fas fa-database"></i>
                                        <span>Sauvegarde & Restauration</span>
                                    </div>
                                </div>
                            </div>
                            <div class="settings-main">
                                <!-- System Settings Tab -->
                                <div class="settings-tab active" id="systemSettings">
                                    <h3>Paramètres Système</h3>
                                    <form id="systemSettingsForm">
                                        <div class="settings-section">
                                            <h4>Général</h4>
                                            <div class="form-group">
                                                <label for="systemLanguage">Langue</label>
                                                <select id="systemLanguage" name="systemLanguage">
                                                    <option value="fr" selected>Français</option>
                                                    <option value="en">English</option>
                                                    <option value="es">Español</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="systemTheme">Thème</label>
                                                <select id="systemTheme" name="systemTheme">
                                                    <option value="light" selected>Clair</option>
                                                    <option value="dark">Sombre</option>
                                                    <option value="auto">Automatique (selon système)</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="systemTimeZone">Fuseau horaire</label>
                                                <select id="systemTimeZone" name="systemTimeZone">
                                                    <option value="Europe/Paris" selected>Europe/Paris</option>
                                                    <option value="Europe/London">Europe/London</option>
                                                    <option value="America/New_York">America/New_York</option>
                                                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div class="settings-section">
                                            <h4>Alertes et Notifications</h4>
                                            <div class="form-group">
                                                <label for="stockThreshold">Seuil d'alerte stock faible</label>
                                                <input type="number" id="stockThreshold" name="stockThreshold" value="10" min="1" max="100">
                                            </div>
                                            <div class="form-group">
                                                <label for="expirationDays">Alerte expiration (jours avant)</label>
                                                <input type="number" id="expirationDays" name="expirationDays" value="30" min="1" max="365">
                                            </div>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="emailAlerts" name="emailAlerts" checked>
                                                    <span class="checkbox-custom"></span>
                                                    Recevoir les alertes par email
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <label for="emailFrequency">Fréquence des emails</label>
                                                <select id="emailFrequency" name="emailFrequency">
                                                    <option value="immediate">Immédiat</option>
                                                    <option value="hourly">Toutes les heures</option>
                                                    <option value="daily" selected>Quotidien</option>
                                                    <option value="weekly">Hebdomadaire</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div class="settings-section">
                                            <h4>Affichage</h4>
                                            <div class="form-group">
                                                <label for="itemsPerPage">Éléments par page</label>
                                                <select id="itemsPerPage" name="itemsPerPage">
                                                    <option value="10" selected>10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                            </div>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="compactView" name="compactView">
                                                    <span class="checkbox-custom"></span>
                                                    Vue compacte
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="button" class="btn btn-secondary" id="resetSystemSettings">Réinitialiser</button>
                                            <button type="submit" class="btn btn-primary">Enregistrer</button>
                                        </div>
                                    </form>
                                </div>
                                
                                <!-- Users Tab -->
                                <div class="settings-tab" id="usersSettings">
                                    <div class="tab-header">
                                        <h3>Gestion des Utilisateurs</h3>
                                        <button class="btn btn-primary" id="addUserBtn">
                                            <i class="fas fa-plus"></i>
                                            Ajouter Utilisateur
                                        </button>
                                    </div>
                                    
                                    <div class="table-container">
                                        <table class="data-table" id="usersTable">
                                            <thead>
                                                <tr>
                                                    <th>Nom</th>
                                                    <th>Email</th>
                                                    <th>Rôle</th>
                                                    <th>Statut</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Dr. Martin Dubois</td>
                                                    <td>martin.dubois@pharmacie.com</td>
                                                    <td>Administrateur</td>
                                                    <td><span class="status-badge status-in-stock">Actif</span></td>
                                                    <td>
                                                        <div class="action-buttons">
                                                            <button class="action-btn" title="Modifier">
                                                                <i class="fas fa-edit"></i>
                                                            </button>
                                                            <button class="action-btn" title="Supprimer">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Sophie Bernard</td>
                                                    <td>sophie.bernard@pharmacie.com</td>
                                                    <td>Préparateur</td>
                                                    <td><span class="status-badge status-in-stock">Actif</span></td>
                                                    <td>
                                                        <div class="action-buttons">
                                                            <button class="action-btn" title="Modifier">
                                                                <i class="fas fa-edit"></i>
                                                            </button>
                                                            <button class="action-btn" title="Supprimer">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jean Dupont</td>
                                                    <td>jean.dupont@pharmacie.com</td>
                                                    <td>Gestionnaire</td>
                                                    <td><span class="status-badge status-low-stock">Inactif</span></td>
                                                    <td>
                                                        <div class="action-buttons">
                                                            <button class="action-btn" title="Modifier">
                                                                <i class="fas fa-edit"></i>
                                                            </button>
                                                            <button class="action-btn" title="Supprimer">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <!-- Pharmacy Info Tab -->
                                <div class="settings-tab" id="pharmacySettings">
                                    <h3>Information Pharmacie</h3>
                                    <form id="pharmacyInfoForm">
                                        <div class="pharmacy-info-section">
                                            <div class="form-group">
                                                <label for="pharmacyName">Nom de la Pharmacie</label>
                                                <input type="text" id="pharmacyName" name="pharmacyName" value="Pharmacie Centrale">
                                            </div>
                                            <div class="form-group">
                                                <label for="pharmacyOwner">Titulaire</label>
                                                <input type="text" id="pharmacyOwner" name="pharmacyOwner" value="Dr. Martin Dubois">
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group">
                                                    <label for="pharmacyLicense">Numéro de Licence</label>
                                                    <input type="text" id="pharmacyLicense" name="pharmacyLicense" value="PH-75123456">
                                                </div>
                                                <div class="form-group">
                                                    <label for="pharmacyTaxId">Numéro SIRET</label>
                                                    <input type="text" id="pharmacyTaxId" name="pharmacyTaxId" value="123 456 789 00012">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="pharmacyAddress">Adresse</label>
                                                <textarea id="pharmacyAddress" name="pharmacyAddress" rows="3">123 Rue de la Santé, 75001 Paris</textarea>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group">
                                                    <label for="pharmacyPhone">Téléphone</label>
                                                    <input type="tel" id="pharmacyPhone" name="pharmacyPhone" value="01 23 45 67 89">
                                                </div>
                                                <div class="form-group">
                                                    <label for="pharmacyEmail">Email</label>
                                                    <input type="email" id="pharmacyEmail" name="pharmacyEmail" value="contact@pharmacie-centrale.fr">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="pharmacyHours">Horaires d'ouverture</label>
                                                <textarea id="pharmacyHours" name="pharmacyHours" rows="3">Lundi - Vendredi: 9h00 - 19h30
Samedi: 9h00 - 17h00
Dimanche: Fermé</textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="pharmacyLogo">Logo de la Pharmacie</label>
                                                <div class="file-upload">
                                                    <input type="file" id="pharmacyLogo" name="pharmacyLogo" accept="image/*">
                                                    <button type="button" class="btn btn-secondary">Choisir un fichier</button>
                                                    <span>Aucun fichier sélectionné</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="reset" class="btn btn-secondary">Annuler</button>
                                            <button type="submit" class="btn btn-primary">Enregistrer</button>
                                        </div>
                                    </form>
                                </div>
                                
                                <!-- Security Tab -->
                                <div class="settings-tab" id="securitySettings">
                                    <h3>Paramètres de Sécurité</h3>
                                    <form id="securitySettingsForm">
                                        <div class="settings-section">
                                            <h4>Authentification</h4>
                                            <div class="form-group">
                                                <label for="sessionTimeout">Expiration de session (minutes)</label>
                                                <input type="number" id="sessionTimeout" name="sessionTimeout" value="30" min="5" max="120">
                                            </div>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="twoFactorAuth" name="twoFactorAuth">
                                                    <span class="checkbox-custom"></span>
                                                    Activer l'authentification à deux facteurs
                                                </label>
                                            </div>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="passwordComplexity" name="passwordComplexity" checked>
                                                    <span class="checkbox-custom"></span>
                                                    Exiger des mots de passe complexes
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <label for="passwordExpiry">Expiration des mots de passe (jours)</label>
                                                <input type="number" id="passwordExpiry" name="passwordExpiry" value="90" min="30" max="365">
                                            </div>
                                        </div>
                                        
                                        <div class="settings-section">
                                            <h4>Journal d'Activité</h4>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="enableAuditLog" name="enableAuditLog" checked>
                                                    <span class="checkbox-custom"></span>
                                                    Activer le journal d'activité
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <label for="logRetention">Conservation des journaux (jours)</label>
                                                <input type="number" id="logRetention" name="logRetention" value="180" min="30" max="365">
                                            </div>
                                            <div class="form-group">
                                                <button type="button" class="btn btn-secondary" id="viewAuditLogBtn">
                                                    <i class="fas fa-list"></i>
                                                    Consulter le journal
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div class="settings-section">
                                            <h4>Gestion des accès</h4>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="restrictIpAccess" name="restrictIpAccess">
                                                    <span class="checkbox-custom"></span>
                                                    Restreindre l'accès par adresse IP
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <label for="allowedIps">Adresses IP autorisées</label>
                                                <textarea id="allowedIps" name="allowedIps" rows="3" placeholder="Entrez une adresse IP par ligne"></textarea>
                                                <small class="form-hint">Laissez vide pour autoriser toutes les adresses</small>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="reset" class="btn btn-secondary">Annuler</button>
                                            <button type="submit" class="btn btn-primary">Enregistrer</button>
                                        </div>
                                    </form>
                                </div>
                                
                                <!-- Backup Tab -->
                                <div class="settings-tab" id="backupSettings">
                                    <h3>Sauvegarde & Restauration</h3>
                                    
                                    <div class="settings-section">
                                        <h4>Sauvegarde Manuelle</h4>
                                        <p>Créez une sauvegarde complète du système à tout moment.</p>
                                        <div class="action-panel">
                                            <button class="btn btn-primary" id="createBackupBtn">
                                                <i class="fas fa-download"></i>
                                                Créer une Sauvegarde
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="settings-section">
                                        <h4>Sauvegardes Automatiques</h4>
                                        <form id="autoBackupForm">
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="enableAutoBackup" name="enableAutoBackup" checked>
                                                    <span class="checkbox-custom"></span>
                                                    Activer les sauvegardes automatiques
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <label for="backupFrequency">Fréquence</label>
                                                <select id="backupFrequency" name="backupFrequency">
                                                    <option value="daily">Quotidienne</option>
                                                    <option value="weekly" selected>Hebdomadaire</option>
                                                    <option value="monthly">Mensuelle</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="backupTime">Heure de sauvegarde</label>
                                                <input type="time" id="backupTime" name="backupTime" value="01:00">
                                            </div>
                                            <div class="form-group">
                                                <label for="retentionCount">Nombre de sauvegardes à conserver</label>
                                                <input type="number" id="retentionCount" name="retentionCount" value="5" min="1" max="20">
                                            </div>
                                            <div class="form-group checkbox-group">
                                                <label class="checkbox-label">
                                                    <input type="checkbox" id="cloudBackup" name="cloudBackup" checked>
                                                    <span class="checkbox-custom"></span>
                                                    Sauvegarder également sur le cloud
                                                </label>
                                            </div>
                                            <div class="form-actions">
                                                <button type="submit" class="btn btn-primary">Enregistrer</button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div class="settings-section">
                                        <h4>Restauration</h4>
                                        <p>Restaurez le système à partir d'une sauvegarde précédente.</p>
                                        <div class="form-group">
                                            <label for="backupFile">Fichier de sauvegarde</label>
                                            <div class="file-upload">
                                                <input type="file" id="backupFile" name="backupFile" accept=".zip,.backup,.sql">
                                                <button type="button" class="btn btn-secondary">Choisir un fichier</button>
                                                <span>Aucun fichier sélectionné</span>
                                            </div>
                                        </div>
                                        <div class="action-panel warning-panel">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            <div>
                                                <h5>Attention</h5>
                                                <p>La restauration remplacera toutes les données actuelles par celles de la sauvegarde sélectionnée. Cette action est irréversible.</p>
                                            </div>
                                            <button class="btn btn-danger" id="restoreBackupBtn" disabled>
                                                <i class="fas fa-sync-alt"></i>
                                                Restaurer
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="settings-section">
                                        <h4>Historique des Sauvegardes</h4>
                                        <div class="table-container">
                                            <table class="data-table" id="backupHistoryTable">
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Type</th>
                                                        <th>Taille</th>
                                                        <th>Statut</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>23/07/2024 01:00</td>
                                                        <td>Automatique</td>
                                                        <td>24.5 MB</td>
                                                        <td><span class="status-badge status-in-stock">Réussi</span></td>
                                                        <td>
                                                            <div class="action-buttons">
                                                                <button class="action-btn" title="Télécharger">
                                                                    <i class="fas fa-download"></i>
                                                                </button>
                                                                <button class="action-btn" title="Restaurer">
                                                                    <i class="fas fa-sync-alt"></i>
                                                                </button>
                                                                <button class="action-btn" title="Supprimer">
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16/07/2024 01:00</td>
                                                        <td>Automatique</td>
                                                        <td>23.8 MB</td>
                                                        <td><span class="status-badge status-in-stock">Réussi</span></td>
                                                        <td>
                                                            <div class="action-buttons">
                                                                <button class="action-btn" title="Télécharger">
                                                                    <i class="fas fa-download"></i>
                                                                </button>
                                                                <button class="action-btn" title="Restaurer">
                                                                    <i class="fas fa-sync-alt"></i>
                                                                </button>
                                                                <button class="action-btn" title="Supprimer">
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>15/07/2024 15:32</td>
                                                        <td>Manuel</td>
                                                        <td>23.5 MB</td>
                                                        <td><span class="status-badge status-in-stock">Réussi</span></td>
                                                        <td>
                                                            <div class="action-buttons">
                                                                <button class="action-btn" title="Télécharger">
                                                                    <i class="fas fa-download"></i>
                                                                </button>
                                                                <button class="action-btn" title="Restaurer">
                                                                    <i class="fas fa-sync-alt"></i>
                                                                </button>
                                                                <button class="action-btn" title="Supprimer">
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <!-- Modal for Add Product -->
    <div class="modal" id="addProductModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Ajouter un Produit</h3>
                <button class="modal-close" id="modalCloseAddProduct">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="addProductForm">
                    <div class="form-group">
                        <label for="productName">Nom du produit</label>
                        <input type="text" id="productName" name="productName" required>
                    </div>
                    <div class="form-group">
                        <label for="productCategory">Catégorie</label>
                        <select id="productCategory" name="productCategory" required>
                            <option value="Médicaments">Médicaments</option>
                            <option value="Vitamines">Vitamines</option>
                            <option value="Matériel médical">Matériel médical</option>
                            <option value="Cosmétiques">Cosmétiques</option>
                            <option value="Autres">Autres</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="productQuantity">Quantité</label>
                            <input type="number" id="productQuantity" name="productQuantity" min="0" required>
                        </div>
                        <div class="form-group">
                            <label for="productPrice">Prix (€)</label>
                            <input type="number" id="productPrice" name="productPrice" step="0.01" min="0" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="productExpiration">Date d'expiration</label>
                        <input type="date" id="productExpiration" name="productExpiration" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelAddProductBtn">Annuler</button>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for New Order -->
    <div class="modal" id="newOrderModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Nouvelle Commande</h3>
                <button class="modal-close" id="modalCloseNewOrder">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="newOrderForm">
                    <div class="form-group">
                        <label for="orderProductName">Produit</label>
                        <input type="text" id="orderProductName" name="orderProductName" placeholder="Nom du produit ou ID" required>
                        <!-- Ideally, this would be a searchable select or an "Add Item" feature -->
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="orderQuantity">Quantité</label>
                            <input type="number" id="orderQuantity" name="orderQuantity" min="1" required>
                        </div>
                        <div class="form-group">
                            <label for="orderDate">Date de Commande</label>
                            <input type="date" id="orderDate" name="orderDate" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="orderCustomerName">Nom du Client (Optionnel)</label>
                        <input type="text" id="orderCustomerName" name="orderCustomerName">
                    </div>
                    <div class="form-group">
                        <label for="orderNotes">Notes</label>
                        <textarea id="orderNotes" name="orderNotes" rows="3"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelNewOrderBtn">Annuler</button>
                        <button type="submit" class="btn btn-primary">Passer la Commande</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for Add Supplier -->
    <div class="modal" id="addSupplierModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Ajouter un Fournisseur</h3>
                <button class="modal-close" id="modalCloseAddSupplier">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="addSupplierForm">
                    <div class="form-group">
                        <label for="supplierName">Nom du Fournisseur</label>
                        <input type="text" id="supplierName" name="supplierName" required>
                    </div>
                    <div class="form-group">
                        <label for="supplierContactPerson">Personne à Contacter</label>
                        <input type="text" id="supplierContactPerson" name="supplierContactPerson">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="supplierEmail">Email</label>
                            <input type="email" id="supplierEmail" name="supplierEmail">
                        </div>
                        <div class="form-group">
                            <label for="supplierPhone">Téléphone</label>
                            <input type="tel" id="supplierPhone" name="supplierPhone">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="supplierAddress">Adresse</label>
                        <textarea id="supplierAddress" name="supplierAddress" rows="3"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelAddSupplierBtn">Annuler</button>
                        <button type="submit" class="btn btn-primary">Ajouter Fournisseur</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for Export Report -->
    <div class="modal" id="exportReportModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Exporter un Rapport</h3>
                <button class="modal-close" id="modalCloseExportReport">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="exportReportForm">
                    <div class="form-group">
                        <label for="reportType">Type de Rapport</label>
                        <select id="reportType" name="reportType" required>
                            <option value="inventory">Inventaire Complet</option>
                            <option value="sales">Rapport des Ventes</option>
                            <option value="low_stock">Produits à Stock Faible</option>
                            <option value="expirations">Produits Proches de l'Expiration</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="reportStartDate">Date de Début</label>
                            <input type="date" id="reportStartDate" name="reportStartDate">
                        </div>
                        <div class="form-group">
                            <label for="reportEndDate">Date de Fin</label>
                            <input type="date" id="reportEndDate" name="reportEndDate">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="reportFormat">Format</label>
                        <select id="reportFormat" name="reportFormat" required>
                            <option value="csv">CSV</option>
                            <option value="pdf">PDF (simulation)</option>
                            <option value="excel">Excel (simulation)</option>
                        </select>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelExportReportBtn">Annuler</button>
                        <button type="submit" class="btn btn-primary">Exporter le Rapport</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for Add Batch -->
    <div class="modal" id="addBatchModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Nouveau Lot</h3>
                <button class="modal-close" id="modalCloseAddBatch">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="addBatchForm">
                    <div class="form-group">
                        <label for="batchProductSelect">Produit</label>
                        <select id="batchProductSelect" name="batchProductSelect" required>
                            <option value="">Sélectionner un produit</option>
                            <!-- Options will be populated by JavaScript -->
                        </select>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="batchNumber">Numéro de Lot</label>
                            <input type="text" id="batchNumber" name="batchNumber" required>
                        </div>
                        <div class="form-group">
                            <label for="serialNumber">Numéro de Série</label>
                            <input type="text" id="serialNumber" name="serialNumber">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="batchQuantity">Quantité</label>
                            <input type="number" id="batchQuantity" name="batchQuantity" min="1" required>
                        </div>
                        <div class="form-group">
                            <label for="batchExpirationDate">Date d'Expiration</label>
                            <input type="date" id="batchExpirationDate" name="batchExpirationDate" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="batchSupplier">Fournisseur</label>
                        <select id="batchSupplier" name="batchSupplier" required>
                            <option value="">Sélectionner un fournisseur</option>
                            <!-- Options will be populated by JavaScript -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="batchNotes">Notes</label>
                        <textarea id="batchNotes" name="batchNotes" rows="3" placeholder="Conditions de stockage, remarques..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelAddBatchBtn">Annuler</button>
                        <button type="submit" class="btn btn-primary">Enregistrer le Lot</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for Movement Details -->
    <div class="modal" id="movementDetailsModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Détails du Mouvement</h3>
                <button class="modal-close" id="modalCloseMovementDetails">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body" id="movementDetailsBody">
                <!-- Movement details will be populated by JavaScript -->
            </div>
        </div>
    </div>

    <!-- Modal for Import Suppliers -->
    <div class="modal" id="importSuppliersModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Importer Fournisseurs depuis Excel</h3>
                <button class="modal-close" id="modalCloseImportSuppliers">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="import-section">
                    <div class="file-upload-area" id="suppliersUploadArea">
                        <div class="upload-placeholder">
                            <i class="fas fa-file-excel"></i>
                            <h4>Déposez votre fichier Excel ici</h4>
                            <p>ou cliquez pour sélectionner un fichier</p>
                            <p class="file-requirements">Formats acceptés: .xlsx, .xls</p>
                        </div>
                        <input type="file" id="suppliersFileInput" accept=".xlsx,.xls" style="display: none;">
                    </div>
                    
                    <div class="template-section">
                        <h4>Format du fichier Excel requis :</h4>
                        <div class="template-columns">
                            <span class="column-tag">Nom</span>
                            <span class="column-tag">Personne Contact</span>
                            <span class="column-tag">Email</span>
                            <span class="column-tag">Téléphone</span>
                            <span class="column-tag">Adresse</span>
                        </div>
                        <button class="btn btn-secondary" id="downloadSuppliersTemplate">
                            <i class="fas fa-download"></i>
                            Télécharger Modèle
                        </button>
                    </div>
                    
                    <div class="import-preview" id="suppliersPreview" style="display: none;">
                        <h4>Aperçu des données :</h4>
                        <div class="preview-table-container">
                            <table class="preview-table" id="suppliersPreviewTable">
                                <thead></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div class="import-actions">
                            <button class="btn btn-secondary" id="cancelSuppliersImport">Annuler</button>
                            <button class="btn btn-primary" id="confirmSuppliersImport">
                                <i class="fas fa-check"></i>
                                Importer <span id="suppliersImportCount">0</span> fournisseur(s)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for Import Orders -->
    <div class="modal" id="importOrdersModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Importer Commandes depuis Excel</h3>
                <button class="modal-close" id="modalCloseImportOrders">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="import-section">
                    <div class="file-upload-area" id="ordersUploadArea">
                        <div class="upload-placeholder">
                            <i class="fas fa-file-excel"></i>
                            <h4>Déposez votre fichier Excel ici</h4>
                            <p>ou cliquez pour sélectionner un fichier</p>
                            <p class="file-requirements">Formats acceptés: .xlsx, .xls</p>
                        </div>
                        <input type="file" id="ordersFileInput" accept=".xlsx,.xls" style="display: none;">
                    </div>
                    
                    <div class="template-section">
                        <h4>Format du fichier Excel requis :</h4>
                        <div class="template-columns">
                            <span class="column-tag">Produit</span>
                            <span class="column-tag">Quantité</span>
                            <span class="column-tag">Date Commande</span>
                            <span class="column-tag">Client</span>
                            <span class="column-tag">Statut</span>
                        </div>
                        <button class="btn btn-secondary" id="downloadOrdersTemplate">
                            <i class="fas fa-download"></i>
                            Télécharger Modèle
                        </button>
                    </div>
                    
                    <div class="import-preview" id="ordersPreview" style="display: none;">
                        <h4>Aperçu des données :</h4>
                        <div class="preview-table-container">
                            <table class="preview-table" id="ordersPreviewTable">
                                <thead></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div class="import-actions">
                            <button class="btn btn-secondary" id="cancelOrdersImport">Annuler</button>
                            <button class="btn btn-primary" id="confirmOrdersImport">
                                <i class="fas fa-check"></i>
                                Importer <span id="ordersImportCount">0</span> commande(s)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for User Profile Settings -->
    <div class="modal" id="profileSettingsModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Mon Profil</h3>
                <button class="modal-close" id="modalCloseProfileSettings">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="profileSettingsForm">
                    <div class="profile-section">
                        <div class="profile-avatar">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=pharmacist" alt="Photo de profil">
                            <button type="button" class="btn btn-secondary">Changer la photo</button>
                        </div>
                        <div class="profile-info">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">Prénom</label>
                                    <input type="text" id="firstName" name="firstName" value="Martin" required>
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Nom</label>
                                    <input type="text" id="lastName" name="lastName" value="Dubois" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="title">Titre/Fonction</label>
                                <input type="text" id="title" name="title" value="Pharmacien Responsable" required>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" value="martin.dubois@pharmacie.com" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Téléphone</label>
                                    <input type="tel" id="phone" name="phone" value="01 23 45 67 89">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="license">Numéro d'Ordre</label>
                                <input type="text" id="license" name="license" value="75123456">
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelProfileSettings">Annuler</button>
                        <button type="submit" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for Preferences -->
    <div class="modal" id="preferencesModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Préférences</h3>
                <button class="modal-close" id="modalClosePreferences">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="preferencesForm">
                    <div class="preferences-section">
                        <h4>Interface</h4>
                        <div class="form-group">
                            <label for="theme">Thème</label>
                            <select id="theme" name="theme">
                                <option value="light">Clair</option>
                                <option value="dark">Sombre</option>
                                <option value="auto">Automatique</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="language">Langue</label>
                            <select id="language" name="language">
                                <option value="fr" selected>Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                    </div>
                    <div class="preferences-section">
                        <h4>Alertes</h4>
                        <div class="form-group">
                            <label for="stockThreshold">Seuil d'alerte stock faible</label>
                            <input type="number" id="stockThreshold" name="stockThreshold" value="10" min="1" max="100">
                        </div>
                        <div class="form-group">
                            <label for="expirationDays">Alerte expiration (jours avant)</label>
                            <input type="number" id="expirationDays" name="expirationDays" value="30" min="1" max="365">
                        </div>
                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="emailAlerts" name="emailAlerts" checked>
                                <span class="checkbox-custom"></span>
                                Recevoir les alertes par email
                            </label>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelPreferences">Annuler</button>
                        <button type="submit" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal for Notification Settings -->
    <div class="modal" id="notificationSettingsModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Paramètres de Notifications</h3>
                <button class="modal-close" id="modalCloseNotificationSettings">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="notificationSettingsForm">
                    <div class="notification-types">
                        <h4>Types de notifications</h4>
                        <div class="notification-item">
                            <div class="notification-info">
                                <h5>Stock faible</h5>
                                <p>Alerte lorsqu'un produit atteint le seuil critique</p>
                            </div>
                            <div class="notification-controls">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="notification-item">
                            <div class="notification-info">
                                <h5>Produits expirés</h5>
                                <p>Notification pour les produits périmés</p>
                            </div>
                            <div class="notification-controls">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="notification-item">
                            <div class="notification-info">
                                <h5>Nouvelles commandes</h5>
                                <p>Alerte pour les nouvelles commandes reçues</p>
                            </div>
                            <div class="notification-controls">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="email-settings">
                        <h4>Paramètres Email</h4>
                        <div class="form-group">
                            <label for="emailFrequency">Fréquence des emails</label>
                            <select id="emailFrequency" name="emailFrequency">
                                <option value="immediate">Immédiat</option>
                                <option value="hourly">Toutes les heures</option>
                                <option value="daily" selected>Quotidien</option>
                                <option value="weekly">Hebdomadaire</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="emailTime">Heure d'envoi quotidien</label>
                            <input type="time" id="emailTime" name="emailTime" value="09:00">
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" id="cancelNotificationSettings">Annuler</button>
                        <button type="submit" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <script src="scriptstock.js"></script>
</body>
</html>