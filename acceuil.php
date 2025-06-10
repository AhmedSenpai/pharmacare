<?php


?>


<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de Stocks de Pharmacie</title>
    <link rel="stylesheet" href="style.css">
    <!-- Font Awesome CDN for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script type="importmap">
    {
        "imports": {
            "xlsx": "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/xlsx.full.min.js",
            "jspdf": "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",
            "jspdf-autotable": "https://cdn.jsdelivr.net/npm/jspdf-autotable@3.5.25/dist/jspdf.plugin.autotable.min.js"
        }
    }
    </script>
</head>
<body>
    <div class="container" style="display: none;">
        <aside class="sidebar">
            <div class="sidebar-header">
                <img src="asset_logo.png" alt="Logo PharmaStock" class="logo-pharmastock" />
                <h2>PharmaStock</h2>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="#" class="active" data-target="dashboard"><i class="fas fa-tachometer-alt"></i> Tableau de Bord</a></li>
                    <li><a href="#" data-target="inventory"><i class="fas fa-boxes"></i> Inventaire</a></li>
                    <li><a href="#" data-target="traceability"><i class="fas fa-barcode"></i> Traçabilité</a></li>
                    <li><a href="#" data-target="orders"><i class="fas fa-shopping-cart"></i> Commandes</a></li>
                    <li><a href="#" data-target="suppliers"><i class="fas fa-truck"></i> Fournisseurs</a></li>
                    <li><a href="#" data-target="reports"><i class="fas fa-chart-line"></i> Rapports</a></li>
                    <li><a href="#" data-target="settings"><i class="fas fa-cog"></i> Paramètres</a></li>
                </ul>
            </nav>
        </aside>
        <main class="main-content">
            <header class="main-header">
                <div class="header-title">
                    <h1>Gestion de Stocks de Pharmacie</h1>
                </div>
                <div class="header-user">
                    <div class="header-notifications" id="header-notifications-toggle">
                        <i class="fas fa-bell notification-bell-icon"></i>
                        <span class="notification-badge" id="notification-badge-count">0</span>
                    </div>
                    <div class="notifications-dropdown" id="notifications-dropdown-menu">
                        <div class="notifications-dropdown-header">
                            <h4>Notifications</h4>
                        </div>
                        <ul id="notifications-dropdown-list">
                            <!-- Notification items will be populated here by JavaScript -->
                        </ul>
                        <p id="no-notifications-dropdown-message" style="text-align: center; padding: 15px 10px; display: none; color: var(--secondary-color); font-size: 0.9em;">
                            Aucune nouvelle notification.
                        </p>
                    </div>

                    <div class="user-profile-toggle" id="user-profile-toggle">
                        <i class="fas fa-user-circle user-avatar"></i>
                        <span id="logged-in-username">Utilisateur</span>
                        <i class="fas fa-caret-down profile-caret"></i>
                    </div>
                    <div class="profile-dropdown" id="profile-dropdown-menu">
                        <a href="#" id="profile-dropdown-settings" class="profile-dropdown-item">
                            <i class="fas fa-user-cog"></i> Mon Profil
                        </a>
                        <a href="#" id="profile-dropdown-change-password" class="profile-dropdown-item">
                            <i class="fas fa-key"></i> Changer Mot de Passe
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" id="profile-dropdown-logout" class="profile-dropdown-item">
                            <i class="fas fa-sign-out-alt"></i> Déconnexion
                        </a>
                    </div>
                    <div id="current-time"></div>
                </div>
            </header>
            <section id="dashboard" class="content-section active">
                <h2>Tableau de Bord</h2>
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <i class="fas fa-pills icon"></i>
                        <h3>Médicaments Totals</h3>
                        <p id="total-medicaments">1,250</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-exclamation-triangle icon low-stock"></i>
                        <h3>Faible Stock</h3>
                        <p id="low-stock-items">58</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-hourglass-half icon pending-orders"></i>
                        <h3>Commandes en Attente</h3>
                        <p id="pending-orders">12</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-calendar-times icon expired-items"></i>
                        <h3>Articles Expirés (30j)</h3>
                        <p id="expired-items-count">7</p>
                    </div>
                </div>
                <div class="stock-level-overview">
                    <h3><i class="fas fa-layer-group"></i> Répartition des Niveaux de Stock</h3>
                    <ul>
                        <li>
                            <span class="stock-level-bulle critical"></span>
                            Niveau Critique (<span id="critical-low-threshold-display">0</span> unités ou moins): 
                            <strong id="stock-level-critical-count">0</strong> médicaments
                        </li>
                        <li>
                            <span class="stock-level-bulle low"></span>
                            Niveau Bas (entre <span id="low-stock-threshold-lower-display">0</span> et <span id="low-stock-threshold-upper-display">0</span> unités): 
                            <strong id="stock-level-low-count">0</strong> médicaments
                        </li>
                        <li>
                            <span class="stock-level-bulle medium"></span>
                            Niveau Moyen (entre <span id="medium-stock-threshold-lower-display">0</span> et <span id="medium-stock-threshold-upper-display">0</span> unités): 
                            <strong id="stock-level-medium-count">0</strong> médicaments
                        </li>
                        <li>
                            <span class="stock-level-bulle sufficient"></span>
                            Niveau Suffisant (plus de <span id="sufficient-stock-threshold-display">0</span> unités): 
                            <strong id="stock-level-sufficient-count">0</strong> médicaments
                        </li>
                    </ul>
                </div>
                <div class="recent-activity">
                    <h3>Activité Récente</h3>
                    <ul id="recent-activity-list">
                        <!-- Activity items will be populated here by JavaScript -->
                    </ul>
                    <p id="no-recent-activity-message" style="text-align: center; padding: 10px; display: none;">Aucune activité récente.</p>
                </div>
                <div class="dashboard-alerts">
                    <h3><i class="fas fa-bell"></i> Alertes Actuelles</h3>
                    <ul id="alerts-list">
                        <!-- Alert items will be populated here by JavaScript -->
                    </ul>
                    <p id="no-alerts-message" style="text-align: center; padding: 10px; display: none;">Aucune alerte active pour le moment.</p>
                </div>
            </section>
            <section id="inventory" class="content-section">
                <h2>Inventaire</h2>
                <p>Gestion détaillée de l'inventaire des médicaments et des fournitures médicales. Suivi des lots, dates d'expiration, et niveaux de stock.</p>
                
                <div class="form-container">
                    <h3>Ajouter un Nouveau Médicament</h3>
                    <form id="add-medication-form">
                        <div class="form-group">
                            <label for="med-name">Nom du Médicament</label>
                            <input type="text" id="med-name" name="med-name" required>
                        </div>
                        <div class="form-group">
                            <label for="med-category">Catégorie</label>
                            <select id="med-category" name="med-category">
                                <option value="analgesique">Analgésique</option>
                                <option value="antibiotique">Antibiotique</option>
                                <option value="vitamine">Vitamine</option>
                                <option value="anti-inflammatoire">Anti-inflammatoire</option>
                                <option value="sirop">Sirop</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="med-quantity">Quantité</label>
                            <input type="number" id="med-quantity" name="med-quantity" required min="0">
                        </div>
                        <div class="form-group">
                            <label for="med-price">Prix Unitaire (€)</label>
                            <input type="number" id="med-price" name="med-price" required min="0" step="0.01">
                        </div>
                        <div class="form-group">
                            <label for="med-supplier">Fournisseur</label>
                            <input type="text" id="med-supplier" name="med-supplier">
                        </div>
                        <div class="form-group">
                            <label for="med-expiry">Date d'Expiration</label>
                            <input type="date" id="med-expiry" name="med-expiry" required>
                        </div>
                        <div class="form-group">
                            <label for="med-lot">Numéro de Lot</label>
                            <input type="text" id="med-lot" name="med-lot" required>
                        </div>
                        <div class="form-group">
                            <label for="med-serial">Numéro de Série (Optionnel)</label>
                            <input type="text" id="med-serial" name="med-serial">
                        </div>
                        <button type="submit" class="btn btn-primary">Ajouter Médicament</button>
                    </form>
                </div>

                <div class="form-container excel-import-container">
                    <h3>Importer des Médicaments depuis Excel</h3>
                    <p>Assurez-vous que votre fichier Excel a des colonnes nommées: <strong>Nom du Médicament, Catégorie, Quantité, Prix Unitaire, Fournisseur, Date d'Expiration (YYYY-MM-DD), Numéro de Lot, Numéro de Série (Optionnel)</strong>.</p>
                    <div class="form-group">
                        <label for="inventory-excel-file-input">Choisir un fichier Excel (.xlsx, .xls)</label>
                        <input type="file" id="inventory-excel-file-input" name="excel-file-input" accept=".xlsx, .xls">
                    </div>
                    <button type="button" id="inventory-import-excel-btn" class="btn btn-success"><i class="fas fa-file-excel"></i> Importer le Fichier</button>
                    <div id="inventory-import-feedback" class="import-feedback-message" style="margin-top: 15px;"></div>
                </div>
                
                <div class="inventory-table-container">
                    <h3>Liste des Médicaments en Stock</h3>
                    <div class="table-controls">
                        <input type="text" id="inventory-search" placeholder="Rechercher un médicament...">
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom du Médicament</th>
                                <th>Catégorie</th>
                                <th>Quantité</th>
                                <th>Prix Unitaire (€)</th>
                                <th>Fournisseur</th>
                                <th>Date d'Expiration</th>
                                <th>N° de Lot</th>
                                <th>N° de Série</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="inventory-table-body">
                            <!-- Inventory items will be populated here by JavaScript -->
                        </tbody>
                    </table>
                    <p id="no-items-message" style="display: none; text-align: center; padding: 20px;">Aucun médicament en stock pour le moment.</p>
                </div>
            </section>
            <section id="traceability" class="content-section">
                <h2>Traçabilité des Produits</h2>
                <p>Suivi détaillé des mouvements de stock, incluant les numéros de lot et de série.</p>
                <div class="form-container">
                    <h3>Filtrer les Mouvements</h3>
                    <form id="traceability-filter-form">
                        <div class="filter-grid">
                            <div class="form-group">
                                <label for="filter-product-name">Nom du Produit</label>
                                <input type="text" id="filter-product-name" name="filter-product-name">
                            </div>
                            <div class="form-group">
                                <label for="filter-lot-number">Numéro de Lot</label>
                                <input type="text" id="filter-lot-number" name="filter-lot-number">
                            </div>
                            <div class="form-group">
                                <label for="filter-serial-number">Numéro de Série</label>
                                <input type="text" id="filter-serial-number" name="filter-serial-number">
                            </div>
                            <div class="form-group">
                                <label for="filter-movement-type">Type de Mouvement</label>
                                <select id="filter-movement-type" name="filter-movement-type">
                                    <option value="">Tous</option>
                                    <option value="stock_in_manual_add">Ajout Manuel</option>
                                    <option value="stock_in_import">Import Inventaire Excel</option>
                                    <option value="stock_out_deletion">Suppression</option>
                                    {/* Add more types as they are implemented */}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="filter-date-start">Date de Début</label>
                                <input type="date" id="filter-date-start" name="filter-date-start">
                            </div>
                            <div class="form-group">
                                <label for="filter-date-end">Date de Fin</label>
                                <input type="date" id="filter-date-end" name="filter-date-end">
                            </div>
                        </div>
                        <button type="button" id="apply-traceability-filter" class="btn btn-primary">Appliquer Filtres</button>
                        <button type="button" id="reset-traceability-filter" class="btn btn-secondary" style="margin-left:10px;">Réinitialiser</button>
                    </form>
                </div>
                <div class="inventory-table-container">
                    <h3>Journal des Mouvements de Stock</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date et Heure</th>
                                <th>Produit</th>
                                <th>Type de Mouvement</th>
                                <th>Quantité Affectée</th>
                                <th>N° de Lot</th>
                                <th>N° de Série</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody id="traceability-log-body">
                            <!-- Log entries will be populated here -->
                        </tbody>
                    </table>
                    <p id="no-traceability-logs" style="display: none; text-align: center; padding: 20px;">Aucun mouvement de stock enregistré pour le moment.</p>
                </div>
            </section>
            <section id="orders" class="content-section">
                <h2>Commandes</h2>
                <p>Suivi des commandes clients et des commandes fournisseurs. Création, modification, et gestion du statut des commandes.</p>
                
                <div class="form-container">
                    <h3>Créer une Nouvelle Commande</h3>
                    <form id="create-order-form">
                        <div class="form-group">
                            <label for="order-customer-name">Nom du Client/Fournisseur</label>
                            <input type="text" id="order-customer-name" name="order-customer-name" required>
                        </div>
                        <div class="form-group">
                            <label for="order-medication">Médicament</label>
                            <input type="text" id="order-medication" name="order-medication" required>
                        </div>
                        <div class="form-group">
                            <label for="order-quantity">Quantité</label>
                            <input type="number" id="order-quantity" name="order-quantity" required min="1">
                        </div>
                        <div class="form-group">
                            <label for="order-type">Type de Commande</label>
                            <select id="order-type" name="order-type">
                                <option value="client">Commande Client</option>
                                <option value="supplier">Commande Fournisseur</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="order-status">Statut de la Commande</label>
                            <select id="order-status" name="order-status">
                                <option value="pending">En Attente</option>
                                <option value="processing">En Cours</option>
                                <option value="completed">Complétée</option>
                                <option value="cancelled">Annulée</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="order-notes">Notes (Optionnel)</label>
                            <textarea id="order-notes" name="order-notes" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Passer la Commande</button>
                    </form>
                </div>

                <div class="form-container excel-import-container">
                    <h3>Importer des Commandes depuis Excel</h3>
                    <p>Assurez-vous que votre fichier Excel a des colonnes nommées: <strong>Nom du Client/Fournisseur, Médicament, Quantité, Type de Commande (client/fournisseur), Statut (pending/processing/completed/cancelled), Notes (Optionnel)</strong>.</p>
                     <div class="form-group">
                        <label for="orders-excel-file-input">Choisir un fichier Excel (.xlsx, .xls)</label>
                        <input type="file" id="orders-excel-file-input" name="excel-file-input" accept=".xlsx, .xls">
                    </div>
                    <button type="button" id="orders-import-excel-btn" class="btn btn-success"><i class="fas fa-file-excel"></i> Importer le Fichier</button>
                    <div id="orders-import-feedback" class="import-feedback-message" style="margin-top: 15px;"></div>
                </div>
                
                <!-- Placeholder for order management tools -->
            </section>
            <section id="suppliers" class="content-section">
                <h2>Fournisseurs</h2>
                <p>Gestion des informations sur les fournisseurs, historique des commandes, et évaluation des performances.</p>
                
                <div class="form-container">
                    <h3>Ajouter un Nouveau Fournisseur</h3>
                    <form id="add-supplier-form">
                        <div class="form-group">
                            <label for="supplier-name">Nom du Fournisseur</label>
                            <input type="text" id="supplier-name" name="supplier-name" required>
                        </div>
                        <div class="form-group">
                            <label for="supplier-contact-person">Personne à Contacter</label>
                            <input type="text" id="supplier-contact-person" name="supplier-contact-person">
                        </div>
                        <div class="form-group">
                            <label for="supplier-email">Email</label>
                            <input type="email" id="supplier-email" name="supplier-email" required>
                        </div>
                        <div class="form-group">
                            <label for="supplier-phone">Téléphone</label>
                            <input type="tel" id="supplier-phone" name="supplier-phone">
                        </div>
                        <div class="form-group">
                            <label for="supplier-address">Adresse</label>
                            <textarea id="supplier-address" name="supplier-address" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Ajouter Fournisseur</button>
                    </form>
                </div>

                <div class="form-container excel-import-container">
                    <h3>Importer des Fournisseurs depuis Excel</h3>
                    <p>Assurez-vous que votre fichier Excel a des colonnes nommées: <strong>Nom du Fournisseur, Personne à Contacter (Optionnel), Email (Requis), Téléphone (Optionnel), Adresse (Optionnel)</strong>.</p>
                     <div class="form-group">
                        <label for="suppliers-excel-file-input">Choisir un fichier Excel (.xlsx, .xls)</label>
                        <input type="file" id="suppliers-excel-file-input" name="excel-file-input" accept=".xlsx, .xls">
                    </div>
                    <button type="button" id="suppliers-import-excel-btn" class="btn btn-success"><i class="fas fa-file-excel"></i> Importer le Fichier</button>
                    <div id="suppliers-import-feedback" class="import-feedback-message" style="margin-top: 15px;"></div>
                </div>

                <!-- Placeholder for supplier management tools -->
            </section>
            <section id="reports" class="content-section">
                <h2>Rapports</h2>
                <p>Génération de rapports sur les ventes, les niveaux de stock, la rotation des stocks, les produits populaires, et les tendances.</p>
                
                <div class="form-container">
                    <h3>Générer et Télécharger un Rapport</h3>
                    <form id="generate-report-form">
                        <div class="form-group">
                            <label for="report-type">Type de Rapport</label>
                            <select id="report-type" name="report-type">
                                <option value="sales">Rapport des Ventes</option>
                                <option value="stock-levels">Niveaux de Stock</option>
                                <option value="expirations">Produits Expirés</option>
                                <option value="supplier-performance">Performance Fournisseur</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="report-start-date">Date de Début</label>
                            <input type="date" id="report-start-date" name="report-start-date">
                        </div>
                        <div class="form-group">
                            <label for="report-end-date">Date de Fin</label>
                            <input type="date" id="report-end-date" name="report-end-date">
                        </div>
                        <div class="form-group">
                            <button type="button" id="report-download-excel" class="btn btn-success" style="margin-right: 10px;"><i class="fas fa-file-excel"></i> Télécharger Excel</button>
                            <button type="button" id="report-download-pdf" class="btn btn-danger"><i class="fas fa-file-pdf"></i> Télécharger PDF</button>
                        </div>
                    </form>
                    <div id="report-feedback" class="import-feedback-message" style="margin-top: 15px;"></div>
                </div>
                <!-- Placeholder for reports and analytics -->
            </section>
            <section id="settings" class="content-section">
                <h2>Paramètres</h2>
                <p>Configuration des paramètres de l'application, gestion des utilisateurs, des alertes, et des préférences générales.</p>
                
                <div class="form-container">
                    <h3>Paramètres Généraux</h3>
                    <form id="general-settings-form">
                        <div class="form-group">
                            <label for="setting-username">Nom d'utilisateur Actif</label>
                            <input type="text" id="setting-username" name="setting-username" readonly>
                        </div>
                        <div class="form-group">
                            <label for="setting-email">Email de Contact (associé au compte)</label>
                            <input type="email" id="setting-email" name="setting-email" value="utilisateur@example.com">
                        </div>
                        <fieldset class="form-group">
                            <legend>Préférences de Notification</legend>
                            <div>
                                <input type="checkbox" id="notify-low-stock" name="notify-low-stock" checked>
                                <label for="notify-low-stock">Alerte stock bas</label>
                            </div>
                            <div>
                                <input type="checkbox" id="notify-expiring" name="notify-expiring" checked>
                                <label for="notify-expiring">Alerte produits expirant bientôt</label>
                            </div>
                            <div>
                                <input type="checkbox" id="notify-order-updates" name="notify-order-updates">
                                <label for="notify-order-updates">Mises à jour des commandes</label>
                            </div>
                        </fieldset>
                        <button type="submit" class="btn btn-primary">Sauvegarder les Paramètres</button>
                    </form>
                </div>
                <!-- Placeholder for settings configuration -->
            </section>
        </main>
    </div>

    <!-- Edit Medication Modal -->
    <div id="edit-medication-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal-btn" id="close-edit-modal-btn">&times;</span>
            <h3>Modifier les Informations du Médicament</h3>
            <form id="edit-medication-form">
                <input type="hidden" id="edit-med-id">
                <div class="form-group">
                    <label for="edit-med-name">Nom du Médicament</label>
                    <input type="text" id="edit-med-name" name="med-name" required>
                </div>
                <div class="form-group">
                    <label for="edit-med-category">Catégorie</label>
                    <select id="edit-med-category" name="med-category">
                        <option value="analgesique">Analgésique</option>
                        <option value="antibiotique">Antibiotique</option>
                        <option value="vitamine">Vitamine</option>
                        <option value="anti-inflammatoire">Anti-inflammatoire</option>
                        <option value="sirop">Sirop</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-med-quantity">Quantité</label>
                    <input type="number" id="edit-med-quantity" name="med-quantity" required min="0">
                </div>
                <div class="form-group">
                    <label for="edit-med-price">Prix Unitaire (€)</label>
                    <input type="number" id="edit-med-price" name="med-price" required min="0" step="0.01">
                </div>
                <div class="form-group">
                    <label for="edit-med-supplier">Fournisseur</label>
                    <input type="text" id="edit-med-supplier" name="med-supplier">
                </div>
                <div class="form-group">
                    <label for="edit-med-expiry">Date d'Expiration</label>
                    <input type="date" id="edit-med-expiry" name="med-expiry" required>
                </div>
                <div class="form-group">
                    <label for="edit-med-lot">Numéro de Lot</label>
                    <input type="text" id="edit-med-lot" name="med-lot" required>
                </div>
                <div class="form-group">
                    <label for="edit-med-serial">Numéro de Série (Optionnel)</label>
                    <input type="text" id="edit-med-serial" name="med-serial">
                </div>
                <div class="modal-actions">
                     <button type="submit" class="btn btn-primary">Sauvegarder</button>
                     <button type="button" class="btn btn-secondary" id="cancel-edit-medication-btn">Annuler</button>
                </div>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>