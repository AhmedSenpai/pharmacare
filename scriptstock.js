class PharmaStockManager {
    constructor() {
        this.currentSection = 'dashboard';
        this.products = [
            {
                id: 1,
                name: 'Paracétamol 500mg Comprimés',
                category: 'Médicaments',
                stock: 150,
                price: 3.50,
                expiration: '2025-12-15',
                status: 'in-stock'
            },
            {
                id: 2,
                name: 'Aspirine 100mg Comprimés',
                category: 'Médicaments',
                stock: 8,
                price: 2.80,
                expiration: '2024-10-20',
                status: 'low-stock'
            },
            {
                id: 3,
                name: 'Vitamine C 1000mg Effervescent',
                category: 'Vitamines',
                stock: 0,
                price: 12.90,
                expiration: '2024-08-30',
                status: 'out-of-stock'
            },
            {
                id: 4,
                name: 'Thermomètre Digital Pro',
                category: 'Matériel médical',
                stock: 25,
                price: 15.99,
                expiration: '2028-01-01',
                status: 'in-stock'
            },
            {
                id: 5,
                name: 'Ibuprofène 400mg Gélules',
                category: 'Médicaments',
                stock: 89,
                price: 4.20,
                expiration: '2025-03-18',
                status: 'in-stock'
            },
            {
                id: 6,
                name: 'Sirop Toux Sèche Adultes',
                category: 'Médicaments',
                stock: 35,
                price: 7.50,
                expiration: '2025-09-01',
                status: 'in-stock'
            },
            {
                id: 7,
                name: 'Crème Solaire SPF 50+',
                category: 'Cosmétiques',
                stock: 60,
                price: 18.75,
                expiration: '2026-06-30',
                status: 'in-stock'
            },
            {
                id: 8,
                name: 'Bandes Adhésives Stériles (Boîte de 50)',
                category: 'Matériel médical',
                stock: 15,
                price: 6.20,
                expiration: '2027-02-10',
                status: 'low-stock'
            },
            {
                id: 9,
                name: 'Magnésium Marin B6 (60 gélules)',
                category: 'Vitamines',
                stock: 42,
                price: 14.90,
                expiration: '2025-11-05',
                status: 'in-stock'
            },
            {
                id: 10,
                name: 'Désinfectant Mains Hydroalcoolique',
                category: 'Autres',
                stock: 75,
                price: 5.00,
                expiration: '2025-07-22',
                status: 'in-stock'
            }
        ];
        this.orders = [
            {
                id: 1,
                productName: 'Paracétamol 500mg Comprimés',
                quantity: 2,
                orderDate: '2024-07-20',
                customerName: 'Jean Dupont',
                status: 'Complétée'
            },
            {
                id: 2,
                productName: 'Ibuprofène 400mg Gélules',
                quantity: 1,
                orderDate: '2024-07-21',
                customerName: 'Alice Martin',
                status: 'En attente'
            },
            {
                id: 3,
                productName: 'Crème Solaire SPF 50+',
                quantity: 1,
                orderDate: '2024-07-21',
                customerName: 'Pharmacie du Centre (Pro)',
                status: 'En cours de préparation'
            },
             {
                id: 4,
                productName: 'Thermomètre Digital Pro',
                quantity: 5,
                orderDate: '2024-07-19',
                customerName: 'Hôpital Régional',
                status: 'Livrée'
            }
        ];
        this.suppliers = [
            {
                id: 1,
                name: 'PharmaCorp Distribution',
                contactPerson: 'Sophie Bernard',
                email: 's.bernard@pharmacorp.com',
                phone: '01 23 45 67 89',
                address: '12 Rue de l\'Innovation, 75000 Paris'
            },
            {
                id: 2,
                name: 'VitalSanté Fournitures',
                contactPerson: 'Marc Dubois',
                email: 'marc.dubois@vitalsante.fr',
                phone: '04 98 76 54 32',
                address: 'Zone Industrielle Les Pins, 13000 Marseille'
            },
            {
                id: 3,
                name: 'MediGrossiste Express',
                contactPerson: 'Laura Petit',
                email: 'laura.petit@medigrossiste.com',
                phone: '05 11 22 33 44',
                address: 'Parc d\'Activités de la Santé, 69000 Lyon'
            }
        ];
        
        this.salesData = {
            labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Juil'],
            datasets: [{
                label: 'Ventes (€)',
                data: [12000, 15000, 13000, 18000, 16000, 20000, 22500],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.4,
                fill: true
            }]
        };
        
        this.salesChartInstance = null; 
        this.batches = [
            {
                id: 1,
                productId: 1,
                productName: 'Paracétamol 500mg Comprimés',
                batchNumber: 'LOT2024-001',
                serialNumber: 'SN-PAR-240720-001',
                quantity: 150,
                initialQuantity: 200,
                expirationDate: '2025-12-15',
                supplierId: 1,
                supplierName: 'PharmaCorp Distribution',
                createdDate: '2024-07-20',
                status: 'active',
                notes: 'Stockage à température ambiante'
            },
            {
                id: 2,
                productId: 2,
                productName: 'Aspirine 100mg Comprimés',
                batchNumber: 'LOT2024-002',
                serialNumber: 'SN-ASP-240719-001',
                quantity: 8,
                initialQuantity: 100,
                expirationDate: '2024-10-20',
                supplierId: 1,
                supplierName: 'PharmaCorp Distribution',
                createdDate: '2024-07-19',
                status: 'low',
                notes: 'Attention: proche expiration'
            },
            {
                id: 3,
                productId: 5,
                productName: 'Ibuprofène 400mg Gélules',
                batchNumber: 'LOT2024-003',
                serialNumber: 'SN-IBU-240718-001',
                quantity: 89,
                initialQuantity: 120,
                expirationDate: '2025-03-18',
                supplierId: 2,
                supplierName: 'VitalSanté Fournitures',
                createdDate: '2024-07-18',
                status: 'active',
                notes: 'Conservation au frais'
            }
        ];

        this.movementHistory = [
            {
                id: 1,
                productId: 1,
                productName: 'Paracétamol 500mg Comprimés',
                batchId: 1,
                batchNumber: 'LOT2024-001',
                serialNumber: 'SN-PAR-240720-001',
                movementType: 'entry',
                quantity: 200,
                quantityChange: '+200',
                timestamp: '2024-07-20T09:30:00',
                userId: 'Dr. Martin',
                notes: 'Réception livraison PharmaCorp',
                location: 'Entrepôt Principal'
            },
            {
                id: 2,
                productId: 1,
                productName: 'Paracétamol 500mg Comprimés',
                batchId: 1,
                batchNumber: 'LOT2024-001',
                serialNumber: 'SN-PAR-240720-001',
                movementType: 'exit',
                quantity: 50,
                quantityChange: '-50',
                timestamp: '2024-07-21T14:15:00',
                userId: 'Dr. Martin',
                notes: 'Vente comptoir - Prescription Dr. Durand',
                customerReference: 'CMD-2024-001'
            },
            {
                id: 3,
                productId: 2,
                productName: 'Aspirine 100mg Comprimés',
                batchId: 2,
                batchNumber: 'LOT2024-002',
                serialNumber: 'SN-ASP-240719-001',
                movementType: 'entry',
                quantity: 100,
                quantityChange: '+100',
                timestamp: '2024-07-19T11:00:00',
                userId: 'Dr. Martin',
                notes: 'Réception livraison',
                location: 'Entrepôt Principal'
            },
            {
                id: 4,
                productId: 2,
                productName: 'Aspirine 100mg Comprimés',
                batchId: 2,
                batchNumber: 'LOT2024-002',
                serialNumber: 'SN-ASP-240719-001',
                movementType: 'exit',
                quantity: 92,
                quantityChange: '-92',
                timestamp: '2024-07-22T16:30:00',
                userId: 'Dr. Martin',
                notes: 'Transfert vers pharmacie partenaire',
                transferReference: 'TRF-2024-001'
            },
            {
                id: 5,
                productId: 5,
                productName: 'Ibuprofène 400mg Gélules',
                batchId: 3,
                batchNumber: 'LOT2024-003',
                serialNumber: 'SN-IBU-240718-001',
                movementType: 'entry',
                quantity: 120,
                quantityChange: '+120',
                timestamp: '2024-07-18T10:45:00',
                userId: 'Dr. Martin',
                notes: 'Réception VitalSanté',
                location: 'Chambre froide'
            },
            {
                id: 6,
                productId: 5,
                productName: 'Ibuprofène 400mg Gélules',
                batchId: 3,
                batchNumber: 'LOT2024-003',
                serialNumber: 'SN-IBU-240718-001',
                movementType: 'exit',
                quantity: 31,
                quantityChange: '-31',
                timestamp: '2024-07-23T09:20:00',
                userId: 'Dr. Martin',
                notes: 'Ventes diverses',
                customerReference: 'Multiple'
            }
        ];

        // Add alert system properties
        this.alerts = [];
        this.alertSettings = {
            stockThreshold: 10,
            expirationDays: 30,
            emailEnabled: true,
            emailRecipients: ['pharmacien@example.com', 'gestionnaire@example.com']
        };
        this.lastEmailSent = {};
        this.resizeTimeout = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderAll();
        this.initChart();
        this.startAnimations();
        this.updateDashboardStats();
        this.updateRecentActivity();
        this.checkAlerts();
        this.startAlertMonitoring();
    }
    
    setupEventListeners() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.switchSection(section);
            });
        });
        
        // Enhanced mobile sidebar handling
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('show');
                document.body.style.overflow = sidebar.classList.contains('show') ? 'hidden' : '';
            } else {
                sidebar.classList.toggle('collapsed');
            }
        });
        
        // Close mobile sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && sidebar.classList.contains('show')) {
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }
        });
        
        // User profile dropdown
        const userProfile = document.getElementById('userProfile');
        const userDropdown = document.getElementById('userDropdown');
        
        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', (e) => {
            if (!userProfile.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
        
        const setupModal = (modalId, openBtnId, closeBtnId, cancelBtnId, formId, submitHandler) => {
            const modal = document.getElementById(modalId);
            const openBtn = document.getElementById(openBtnId);
            const closeBtn = document.getElementById(closeBtnId);
            const cancelBtn = document.getElementById(cancelBtnId);
            const form = document.getElementById(formId);

            if (openBtn) {
                openBtn.addEventListener('click', () => modal.classList.add('show'));
            }
            if (closeBtn) {
                closeBtn.addEventListener('click', () => modal.classList.remove('show'));
            }
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => modal.classList.remove('show'));
            }
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('show');
                    }
                });
            }
            if (form && submitHandler) {
                 form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitHandler(form);
                    modal.classList.remove('show');
                    form.reset();
                });
            }
        };

        // Profile related modals
        setupModal(
            'profileSettingsModal',
            'profileSettingsBtn',
            'modalCloseProfileSettings',
            'cancelProfileSettings',
            'profileSettingsForm',
            this.updateProfile.bind(this)
        );

        setupModal(
            'preferencesModal',
            'preferencesBtn',
            'modalClosePreferences',
            'cancelPreferences',
            'preferencesForm',
            this.updatePreferences.bind(this)
        );

        setupModal(
            'notificationSettingsModal',
            'notificationSettingsBtn',
            'modalCloseNotificationSettings',
            'cancelNotificationSettings',
            'notificationSettingsForm',
            this.updateNotificationSettings.bind(this)
        );

        setupModal(
            'addProductModal', 
            'addProductBtn', 
            'modalCloseAddProduct', 
            'cancelAddProductBtn', 
            'addProductForm', 
            this.addProduct.bind(this)
        );

        setupModal(
            'newOrderModal',
            'newOrderBtn',
            'modalCloseNewOrder',
            'cancelNewOrderBtn',
            'newOrderForm',
            this.addNewOrder.bind(this)
        );

        setupModal(
            'addSupplierModal',
            'addSupplierTriggerBtn',
            'modalCloseAddSupplier',
            'cancelAddSupplierBtn',
            'addSupplierForm',
            this.addNewSupplier.bind(this)
        );

        setupModal(
            'exportReportModal',
            'exportReportBtn',
            'modalCloseExportReport',
            'cancelExportReportBtn',
            'exportReportForm',
            this.prepareExport.bind(this)
        );
        
        // Reports form handlers
        this.setupReportsEventListeners();
        
        const searchInput = document.querySelector('.search-box input');
        searchInput.addEventListener('input', (e) => {
            this.filterProducts(e.target.value);
        });
        
        const batchSearchInput = document.getElementById('batchSearchInput');
        const movementTypeFilter = document.getElementById('movementTypeFilter');
        const dateFromFilter = document.getElementById('dateFromFilter');
        const dateToFilter = document.getElementById('dateToFilter');

        if (batchSearchInput) {
            batchSearchInput.addEventListener('input', () => this.filterMovementHistory());
        }
        if (movementTypeFilter) {
            movementTypeFilter.addEventListener('change', () => this.filterMovementHistory());
        }
        if (dateFromFilter) {
            dateFromFilter.addEventListener('change', () => this.filterMovementHistory());
        }
        if (dateToFilter) {
            dateToFilter.addEventListener('change', () => this.filterMovementHistory());
        }
        
        // Help and logout handlers
        const helpBtn = document.getElementById('helpBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (helpBtn) {
            helpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showNotification('Centre d\'aide - Fonctionnalité en cours de développement', 'info');
            });
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                    this.showNotification('Déconnexion...', 'info');
                    setTimeout(() => {
                        this.showNotification('Au revoir Dr. Martin !', 'success');
                    }, 1000);
                }
            });
        }

        this.setupExcelImport();

        // Settings tabs
        const settingsNavItems = document.querySelectorAll('.settings-nav-item');
        settingsNavItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all items
                settingsNavItems.forEach(nav => nav.classList.remove('active'));
                // Add active class to clicked item
                item.classList.add('active');
                
                // Hide all tabs
                const tabs = document.querySelectorAll('.settings-tab');
                tabs.forEach(tab => tab.classList.remove('active'));
                
                // Show the selected tab
                const tabName = item.dataset.settingsTab;
                document.getElementById(`${tabName}Settings`).classList.add('active');
            });
        });
        
        // Settings forms submission
        const systemSettingsForm = document.getElementById('systemSettingsForm');
        if (systemSettingsForm) {
            systemSettingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveSystemSettings(systemSettingsForm);
            });
        }
        
        const pharmacyInfoForm = document.getElementById('pharmacyInfoForm');
        if (pharmacyInfoForm) {
            pharmacyInfoForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.savePharmacyInfo(pharmacyInfoForm);
            });
        }
        
        const securitySettingsForm = document.getElementById('securitySettingsForm');
        if (securitySettingsForm) {
            securitySettingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveSecuritySettings(securitySettingsForm);
            });
        }
        
        const autoBackupForm = document.getElementById('autoBackupForm');
        if (autoBackupForm) {
            autoBackupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveBackupSettings(autoBackupForm);
            });
        }
        
        // Backup functionality
        const createBackupBtn = document.getElementById('createBackupBtn');
        if (createBackupBtn) {
            createBackupBtn.addEventListener('click', () => {
                this.createBackup();
            });
        }
        
        const backupFile = document.getElementById('backupFile');
        const restoreBackupBtn = document.getElementById('restoreBackupBtn');
        if (backupFile && restoreBackupBtn) {
            backupFile.addEventListener('change', () => {
                restoreBackupBtn.disabled = !backupFile.files.length;
            });
            
            restoreBackupBtn.addEventListener('click', () => {
                if (confirm('Êtes-vous sûr de vouloir restaurer cette sauvegarde ? Toutes les données actuelles seront remplacées.')) {
                    this.restoreBackup();
                }
            });
        }
        
        // Add user button
        const addUserBtn = document.getElementById('addUserBtn');
        if (addUserBtn) {
            addUserBtn.addEventListener('click', () => {
                this.showNotification('Fonctionnalité d\'ajout d\'utilisateur en cours de développement', 'info');
            });
        }
        
        // View audit log button
        const viewAuditLogBtn = document.getElementById('viewAuditLogBtn');
        if (viewAuditLogBtn) {
            viewAuditLogBtn.addEventListener('click', () => {
                this.showNotification('Fonctionnalité de consultation du journal d\'activité en cours de développement', 'info');
            });
        }
        
        // File upload buttons
        const fileUploadButtons = document.querySelectorAll('.file-upload button');
        fileUploadButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.parentElement.querySelector('input[type="file"]').click();
            });
        });
        
        const fileInputs = document.querySelectorAll('.file-upload input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', function() {
                const fileName = this.files.length ? this.files[0].name : 'Aucun fichier sélectionné';
                this.parentElement.querySelector('span').textContent = fileName;
            });
        });
        
        // Reset system settings button
        const resetSystemSettings = document.getElementById('resetSystemSettings');
        if (resetSystemSettings) {
            resetSystemSettings.addEventListener('click', () => {
                if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les paramètres système ?')) {
                    systemSettingsForm.reset();
                    this.showNotification('Paramètres système réinitialisés', 'success');
                }
            });
        }
    }

    saveSystemSettings(form) {
        const formData = new FormData(form);
        const settings = {
            language: formData.get('systemLanguage'),
            theme: formData.get('systemTheme'),
            timeZone: formData.get('systemTimeZone'),
            stockThreshold: parseInt(formData.get('stockThreshold')),
            expirationDays: parseInt(formData.get('expirationDays')),
            emailAlerts: formData.get('emailAlerts') === 'on',
            emailFrequency: formData.get('emailFrequency'),
            itemsPerPage: parseInt(formData.get('itemsPerPage')),
            compactView: formData.get('compactView') === 'on'
        };
        
        console.log('System settings saved:', settings);
        
        // Update alert settings
        this.alertSettings.stockThreshold = settings.stockThreshold;
        this.alertSettings.expirationDays = settings.expirationDays;
        this.alertSettings.emailEnabled = settings.emailAlerts;
        
        this.showNotification('Paramètres système enregistrés avec succès!', 'success');
    }

    savePharmacyInfo(form) {
        const formData = new FormData(form);
        const info = {
            name: formData.get('pharmacyName'),
            owner: formData.get('pharmacyOwner'),
            license: formData.get('pharmacyLicense'),
            taxId: formData.get('pharmacyTaxId'),
            address: formData.get('pharmacyAddress'),
            phone: formData.get('pharmacyPhone'),
            email: formData.get('pharmacyEmail'),
            hours: formData.get('pharmacyHours'),
            logo: formData.get('pharmacyLogo')
        };
        
        console.log('Pharmacy info saved:', info);
        this.showNotification('Informations de la pharmacie enregistrées avec succès!', 'success');
    }

    saveSecuritySettings(form) {
        const formData = new FormData(form);
        const settings = {
            sessionTimeout: parseInt(formData.get('sessionTimeout')),
            twoFactorAuth: formData.get('twoFactorAuth') === 'on',
            passwordComplexity: formData.get('passwordComplexity') === 'on',
            passwordExpiry: parseInt(formData.get('passwordExpiry')),
            enableAuditLog: formData.get('enableAuditLog') === 'on',
            logRetention: parseInt(formData.get('logRetention')),
            restrictIpAccess: formData.get('restrictIpAccess') === 'on',
            allowedIps: formData.get('allowedIps')
        };
        
        console.log('Security settings saved:', settings);
        this.showNotification('Paramètres de sécurité enregistrés avec succès!', 'success');
    }

    saveBackupSettings(form) {
        const formData = new FormData(form);
        const settings = {
            enableAutoBackup: formData.get('enableAutoBackup') === 'on',
            backupFrequency: formData.get('backupFrequency'),
            backupTime: formData.get('backupTime'),
            retentionCount: parseInt(formData.get('retentionCount')),
            cloudBackup: formData.get('cloudBackup') === 'on'
        };
        
        console.log('Backup settings saved:', settings);
        this.showNotification('Paramètres de sauvegarde enregistrés avec succès!', 'success');
    }

    createBackup() {
        this.showNotification('Création de la sauvegarde en cours...', 'info');
        
        // Simulate backup creation
        setTimeout(() => {
            this.showNotification('Sauvegarde créée avec succès!', 'success');
            
            // Simulate adding to the backup history table
            const backupHistoryTable = document.getElementById('backupHistoryTable');
            if (backupHistoryTable) {
                const tbody = backupHistoryTable.querySelector('tbody');
                const now = new Date();
                const date = now.toLocaleDateString('fr-FR') + ' ' + now.toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
                
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${date}</td>
                    <td>Manuel</td>
                    <td>24.2 MB</td>
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
                `;
                
                tbody.insertBefore(newRow, tbody.firstChild);
            }
        }, 2000);
    }

    restoreBackup() {
        this.showNotification('Restauration de la sauvegarde en cours...', 'info');
        
        // Simulate restore process
        setTimeout(() => {
            this.showNotification('Sauvegarde restaurée avec succès! Reconnexion nécessaire.', 'success');
            
            // Reset file input and disable restore button
            const backupFile = document.getElementById('backupFile');
            const restoreBackupBtn = document.getElementById('restoreBackupBtn');
            if (backupFile) {
                backupFile.value = '';
                backupFile.parentElement.querySelector('span').textContent = 'Aucun fichier sélectionné';
            }
            if (restoreBackupBtn) {
                restoreBackupBtn.disabled = true;
            }
        }, 3000);
    }
    
    setupReportsEventListeners() {
        const reportConfigForm = document.getElementById('reportConfigForm');
        const previewReportBtn = document.getElementById('previewReportBtn');
        const reportTypeSelect = document.getElementById('reportTypeSelect');
        const addScheduledReportBtn = document.getElementById('addScheduledReportBtn');
        
        if (reportConfigForm) {
            reportConfigForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generateReport(reportConfigForm);
            });
        }
        
        if (previewReportBtn) {
            previewReportBtn.addEventListener('click', () => {
                this.previewReport();
            });
        }
        
        if (reportTypeSelect) {
            reportTypeSelect.addEventListener('change', () => {
                this.updateReportPreview();
            });
        }
        
        if (addScheduledReportBtn) {
            addScheduledReportBtn.addEventListener('click', () => {
                this.showScheduleReportModal();
            });
        }
        
        // Quick report handlers
        const quickReportCards = document.querySelectorAll('.quick-report-card');
        quickReportCards.forEach(card => {
            const btn = card.querySelector('button');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const reportType = card.dataset.report;
                    this.generateQuickReport(reportType);
                });
            }
        });
        
        // Populate supplier filter
        this.populateSupplierFilter();
    }
    
    populateSupplierFilter() {
        const supplierFilter = document.getElementById('supplierFilter');
        if (!supplierFilter) return;
        
        // Clear existing options except the first one
        while (supplierFilter.children.length > 1) {
            supplierFilter.removeChild(supplierFilter.lastChild);
        }
        
        this.suppliers.forEach(supplier => {
            const option = document.createElement('option');
            option.value = supplier.id;
            option.textContent = supplier.name;
            supplierFilter.appendChild(option);
        });
    }
    
    generateReport(form) {
        const formData = new FormData(form);
        const reportConfig = {
            type: formData.get('reportType'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            category: formData.get('category'),
            supplier: formData.get('supplier'),
            includeGraphs: formData.get('includeGraphs') === 'on',
            includeDetails: formData.get('includeDetails') === 'on',
            format: formData.get('format')
        };
        
        if (!reportConfig.type) {
            this.showNotification('Veuillez sélectionner un type de rapport', 'error');
            return;
        }
        
        // Simulate report generation
        this.showNotification('Génération du rapport en cours...', 'info');
        
        setTimeout(() => {
            const fileName = `rapport_${reportConfig.type}_${new Date().toISOString().split('T')[0]}.${reportConfig.format}`;
            this.downloadReport(reportConfig, fileName);
            this.showNotification(`Rapport "${this.getReportTypeName(reportConfig.type)}" généré avec succès!`, 'success');
        }, 2000);
    }
    
    previewReport() {
        const reportType = document.getElementById('reportTypeSelect').value;
        if (!reportType) {
            this.showNotification('Veuillez sélectionner un type de rapport', 'error');
            return;
        }
        
        this.updateReportPreview(reportType);
    }
    
    updateReportPreview(reportType) {
        const previewContent = document.getElementById('reportPreviewContent');
        if (!previewContent) return;
        
        if (!reportType) {
            reportType = document.getElementById('reportTypeSelect').value;
        }
        
        if (!reportType) return;
        
        let previewHTML = '';
        
        switch (reportType) {
            case 'inventory':
                previewHTML = this.generateInventoryPreview();
                break;
            case 'sales':
                previewHTML = this.generateSalesPreview();
                break;
            case 'stock-movements':
                previewHTML = this.generateStockMovementsPreview();
                break;
            case 'low-stock':
                previewHTML = this.generateLowStockPreview();
                break;
            case 'expired':
                previewHTML = this.generateExpiredPreview();
                break;
            case 'suppliers':
                previewHTML = this.generateSuppliersPreview();
                break;
            case 'financial':
                previewHTML = this.generateFinancialPreview();
                break;
            default:
                previewHTML = this.generateDefaultPreview(reportType);
        }
        
        previewContent.innerHTML = previewHTML;
    }
    
    generateInventoryPreview() {
        const totalProducts = this.products.length;
        const totalStock = this.products.reduce((sum, p) => sum + p.stock, 0);
        const totalValue = this.products.reduce((sum, p) => sum + (p.stock * p.price), 0);
        
        return `
            <div class="report-summary-stats">
                <div class="report-stat-item">
                    <h4>${totalProducts}</h4>
                    <p>Produits</p>
                </div>
                <div class="report-stat-item">
                    <h4>${totalStock}</h4>
                    <p>Unités</p>
                </div>
                <div class="report-stat-item">
                    <h4>€${totalValue.toFixed(2)}</h4>
                    <p>Valeur</p>
                </div>
            </div>
            <div class="report-preview-chart">Graphique: Répartition par catégorie</div>
            <table class="report-preview-table">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Catégorie</th>
                        <th>Stock</th>
                        <th>Prix</th>
                        <th>Valeur</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.products.slice(0, 5).map(product => `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.category}</td>
                            <td>${product.stock}</td>
                            <td>€${product.price.toFixed(2)}</td>
                            <td>€${(product.stock * product.price).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <p style="text-align: center; margin-top: 1rem; color: var(--text-secondary);">
                ... et ${Math.max(0, totalProducts - 5)} autre(s) produit(s)
            </p>
        `;
    }
    
    generateSalesPreview() {
        const totalSales = this.salesData.datasets[0].data.reduce((sum, val) => sum + val, 0);
        const avgMonthlySales = totalSales / this.salesData.datasets[0].data.length;
        const lastMonthSales = this.salesData.datasets[0].data[this.salesData.datasets[0].data.length - 1];
        
        return `
            <div class="report-summary-stats">
                <div class="report-stat-item">
                    <h4>€${totalSales.toLocaleString()}</h4>
                    <p>Total</p>
                </div>
                <div class="report-stat-item">
                    <h4>€${avgMonthlySales.toFixed(0)}</h4>
                    <p>Moyenne</p>
                </div>
                <div class="report-stat-item">
                    <h4>€${lastMonthSales.toLocaleString()}</h4>
                    <p>Dernier Mois</p>
                </div>
            </div>
            <div class="report-preview-chart">Graphique: Évolution des ventes sur 7 mois</div>
            <table class="report-preview-table">
                <thead>
                    <tr>
                        <th>Mois</th>
                        <th>Ventes (€)</th>
                        <th>Évolution</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.salesData.labels.map((label, index) => {
                        const currentSales = this.salesData.datasets[0].data[index];
                        const previousSales = index > 0 ? this.salesData.datasets[0].data[index - 1] : currentSales;
                        const evolution = index > 0 ? ((currentSales - previousSales) / previousSales * 100).toFixed(1) : '0.0';
                        return `
                            <tr>
                                <td>${label}</td>
                                <td>€${currentSales.toLocaleString()}</td>
                                <td style="color: ${evolution >= 0 ? 'var(--secondary-color)' : 'var(--danger-color)'}">
                                    ${evolution >= 0 ? '+' : ''}${evolution}%
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }
    
    generateLowStockPreview() {
        const lowStockProducts = this.products.filter(p => p.stock <= this.alertSettings.stockThreshold && p.stock > 0);
        
        return `
            <div class="report-summary-stats">
                <div class="report-stat-item">
                    <h4>${lowStockProducts.length}</h4>
                    <p>Produits</p>
                </div>
                <div class="report-stat-item">
                    <h4>${this.alertSettings.stockThreshold}</h4>
                    <p>Seuil</p>
                </div>
            </div>
            <table class="report-preview-table">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Stock Actuel</th>
                        <th>Catégorie</th>
                        <th>Urgence</th>
                    </tr>
                </thead>
                <tbody>
                    ${lowStockProducts.map(product => `
                        <tr>
                            <td>${product.name}</td>
                            <td style="color: var(--warning-color); font-weight: 600;">${product.stock}</td>
                            <td>${product.category}</td>
                            <td>
                                <span style="color: ${product.stock <= 5 ? 'var(--danger-color)' : 'var(--warning-color)'}">
                                    ${product.stock <= 5 ? 'Critique' : 'Modérée'}
                                </span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
    
    generateDefaultPreview(reportType) {
        const reportName = this.getReportTypeName(reportType);
        return `
            <div class="preview-placeholder">
                <i class="fas fa-file-alt"></i>
                <h4>Aperçu: ${reportName}</h4>
                <p>Ce rapport contiendra des données détaillées selon les filtres sélectionnés</p>
                <div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border-radius: 8px; border: 1px solid var(--border-color);">
                    <p><strong>Contenu du rapport:</strong></p>
                    <ul style="text-align: left; margin-top: 0.5rem;">
                        <li>Données filtrées selon la période sélectionnée</li>
                        <li>Graphiques et analyses visuelles</li>
                        <li>Résumé exécutif</li>
                        <li>Recommandations d'action</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    getReportTypeName(type) {
        const names = {
            'inventory': 'Inventaire Complet',
            'sales': 'Rapport des Ventes',
            'stock-movements': 'Mouvements de Stock',
            'low-stock': 'Produits à Stock Faible',
            'expired': 'Produits Expirés',
            'expiring-soon': 'Produits Proches Expiration',
            'suppliers': 'Rapport Fournisseurs',
            'orders': 'Historique Commandes',
            'financial': 'Rapport Financier',
            'analytics': 'Analyses & Statistiques'
        };
        return names[type] || type;
    }
    
    generateQuickReport(reportType) {
        const reportNames = {
            'today-sales': 'Ventes du Jour',
            'weekly-stock': 'Stock Hebdomadaire',
            'alerts-summary': 'Résumé des Alertes',
            'supplier-performance': 'Performance Fournisseurs'
        };
        
        this.showNotification(`Génération du rapport "${reportNames[reportType]}"...`, 'info');
        
        setTimeout(() => {
            const fileName = `${reportType}_${new Date().toISOString().split('T')[0]}.pdf`;
            this.downloadReport({ type: reportType, format: 'pdf' }, fileName);
            this.showNotification(`Rapport "${reportNames[reportType]}" généré avec succès!`, 'success');
        }, 1500);
    }
    
    downloadReport(config, fileName) {
        // Simulate file download
        const link = document.createElement('a');
        link.href = '#';
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        // Create a blob with sample content
        const content = `Rapport PharmaStock - ${this.getReportTypeName(config.type)}\n\nGénéré le: ${new Date().toLocaleString('fr-FR')}\n\nContenu du rapport...`;
        const blob = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(blob);
        
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }
    
    showScheduleReportModal() {
        this.showNotification('Fonctionnalité de programmation des rapports - En cours de développement', 'info');
    }

    setupExcelImport() {
        // Setup suppliers import
        const importSuppliersBtn = document.getElementById('importSuppliersBtn');
        const importSuppliersModal = document.getElementById('importSuppliersModal');
        const suppliersFileInput = document.getElementById('suppliersFileInput');
        const suppliersUploadArea = document.getElementById('suppliersUploadArea');
        
        if (importSuppliersBtn) {
            importSuppliersBtn.addEventListener('click', () => {
                importSuppliersModal.classList.add('show');
            });
        }
        
        // Setup orders import
        const importOrdersBtn = document.getElementById('importOrdersBtn');
        const importOrdersModal = document.getElementById('importOrdersModal');
        const ordersFileInput = document.getElementById('ordersFileInput');
        const ordersUploadArea = document.getElementById('ordersUploadArea');
        
        if (importOrdersBtn) {
            importOrdersBtn.addEventListener('click', () => {
                importOrdersModal.classList.add('show');
            });
        }
        
        // File input handlers
        this.setupFileInputHandlers();
        this.setupDragAndDrop();
        this.setupModalCloseHandlers();
        this.setupTemplateDownloads();
    }
    
    setupFileInputHandlers() {
        const suppliersFileInput = document.getElementById('suppliersFileInput');
        const ordersFileInput = document.getElementById('ordersFileInput');
        
        if (suppliersFileInput) {
            suppliersFileInput.addEventListener('change', (e) => {
                this.handleFileUpload(e.target.files[0], 'suppliers');
            });
        }
        
        if (ordersFileInput) {
            ordersFileInput.addEventListener('change', (e) => {
                this.handleFileUpload(e.target.files[0], 'orders');
            });
        }
        
        // Upload area click handlers
        const suppliersUploadArea = document.getElementById('suppliersUploadArea');
        const ordersUploadArea = document.getElementById('ordersUploadArea');
        
        if (suppliersUploadArea) {
            suppliersUploadArea.addEventListener('click', () => {
                suppliersFileInput.click();
            });
        }
        
        if (ordersUploadArea) {
            ordersUploadArea.addEventListener('click', () => {
                ordersFileInput.click();
            });
        }
    }
    
    setupDragAndDrop() {
        const setupDragEvents = (uploadArea, type) => {
            if (!uploadArea) return;
            
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });
            
            uploadArea.addEventListener('dragleave', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
            });
            
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    this.handleFileUpload(files[0], type);
                }
            });
        };
        
        setupDragEvents(document.getElementById('suppliersUploadArea'), 'suppliers');
        setupDragEvents(document.getElementById('ordersUploadArea'), 'orders');
    }
    
    setupModalCloseHandlers() {
        const modalIds = ['importSuppliersModal', 'importOrdersModal'];
        
        modalIds.forEach(modalId => {
            const modal = document.getElementById(modalId);
            const closeBtn = modal?.querySelector('.modal-close');
            
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.classList.remove('show');
                    this.resetImportModal(modalId);
                });
            }
            
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('show');
                        this.resetImportModal(modalId);
                    }
                });
            }
        });
        
        // Cancel import buttons
        const cancelSuppliersBtn = document.getElementById('cancelSuppliersImport');
        const cancelOrdersBtn = document.getElementById('cancelOrdersImport');
        
        if (cancelSuppliersBtn) {
            cancelSuppliersBtn.addEventListener('click', () => {
                this.resetImportModal('importSuppliersModal');
            });
        }
        
        if (cancelOrdersBtn) {
            cancelOrdersBtn.addEventListener('click', () => {
                this.resetImportModal('importOrdersModal');
            });
        }
        
        // Confirm import buttons
        const confirmSuppliersBtn = document.getElementById('confirmSuppliersImport');
        const confirmOrdersBtn = document.getElementById('confirmOrdersImport');
        
        if (confirmSuppliersBtn) {
            confirmSuppliersBtn.addEventListener('click', () => {
                this.confirmImport('suppliers');
            });
        }
        
        if (confirmOrdersBtn) {
            confirmOrdersBtn.addEventListener('click', () => {
                this.confirmImport('orders');
            });
        }
    }
    
    setupTemplateDownloads() {
        const downloadSuppliersBtn = document.getElementById('downloadSuppliersTemplate');
        const downloadOrdersBtn = document.getElementById('downloadOrdersTemplate');
        
        if (downloadSuppliersBtn) {
            downloadSuppliersBtn.addEventListener('click', () => {
                this.downloadTemplate('suppliers');
            });
        }
        
        if (downloadOrdersBtn) {
            downloadOrdersBtn.addEventListener('click', () => {
                this.downloadTemplate('orders');
            });
        }
    }
    
    handleFileUpload(file, type) {
        if (!file) return;
        
        const validTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
                           'application/vnd.ms-excel'];
        
        if (!validTypes.includes(file.type)) {
            this.showImportError('Format de fichier non supporté. Veuillez utiliser un fichier Excel (.xlsx ou .xls).', type);
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            this.showImportError('Le fichier est trop volumineux. Taille maximale: 5MB.', type);
            return;
        }
        
        this.showFileInfo(file, type);
        this.parseExcelFile(file, type);
    }
    
    showFileInfo(file, type) {
        const uploadArea = document.getElementById(`${type}UploadArea`);
        if (!uploadArea) return;
        
        uploadArea.innerHTML = `
            <div class="file-info">
                <i class="fas fa-file-excel"></i>
                <div>
                    <strong>${file.name}</strong>
                    <p>Taille: ${(file.size / 1024).toFixed(1)} KB</p>
                </div>
            </div>
        `;
    }
    
    showImportError(message, type) {
        const uploadArea = document.getElementById(`${type}UploadArea`);
        if (!uploadArea) return;
        
        uploadArea.innerHTML = `
            <div class="import-error">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <strong>Erreur d'importation</strong>
                    <p>${message}</p>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            this.resetUploadArea(type);
        }, 5000);
    }
    
    parseExcelFile(file, type) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                
                this.processImportData(jsonData, type);
            } catch (error) {
                this.showImportError('Erreur lors de la lecture du fichier Excel. Vérifiez le format.', type);
                console.error('Excel parsing error:', error);
            }
        };
        
        reader.readAsArrayBuffer(file);
    }
    
    processImportData(rawData, type) {
        if (rawData.length < 2) {
            this.showImportError('Le fichier doit contenir au moins une ligne d\'en-têtes et une ligne de données.', type);
            return;
        }
        
        const headers = rawData[0];
        const dataRows = rawData.slice(1).filter(row => row.some(cell => cell !== null && cell !== undefined && cell !== ''));
        
        if (type === 'suppliers') {
            this.processSuppliersData(headers, dataRows);
        } else if (type === 'orders') {
            this.processOrdersData(headers, dataRows);
        }
    }
    
    processSuppliersData(headers, dataRows) {
        const requiredColumns = ['nom', 'personne contact', 'email', 'téléphone', 'adresse'];
        const columnMapping = this.mapColumns(headers, requiredColumns);
        
        if (!columnMapping.nom) {
            this.showImportError('Colonne "Nom" requise non trouvée.', 'suppliers');
            return;
        }
        
        const processedData = dataRows.map((row, index) => ({
            id: null, // Will be assigned during import
            name: row[columnMapping.nom] || '',
            contactPerson: row[columnMapping['personne contact']] || '',
            email: row[columnMapping.email] || '',
            phone: row[columnMapping.téléphone] || '',
            address: row[columnMapping.adresse] || '',
            rowIndex: index + 2 // +2 because we start from row 2 (after headers)
        })).filter(item => item.name.trim() !== '');
        
        this.showImportPreview(processedData, 'suppliers');
    }
    
    processOrdersData(headers, dataRows) {
        const requiredColumns = ['produit', 'quantité', 'date commande', 'client', 'statut'];
        const columnMapping = this.mapColumns(headers, requiredColumns);
        
        if (!columnMapping.produit || !columnMapping.quantité) {
            this.showImportError('Colonnes "Produit" et "Quantité" requises non trouvées.', 'orders');
            return;
        }
        
        const processedData = dataRows.map((row, index) => ({
            id: null, // Will be assigned during import
            productName: row[columnMapping.produit] || '',
            quantity: parseInt(row[columnMapping.quantité]) || 0,
            orderDate: this.parseDate(row[columnMapping['date commande']]) || new Date().toISOString().split('T')[0],
            customerName: row[columnMapping.client] || 'Client importé',
            status: row[columnMapping.statut] || 'En attente',
            notes: '',
            rowIndex: index + 2
        })).filter(item => item.productName.trim() !== '' && item.quantity > 0);
        
        this.showImportPreview(processedData, 'orders');
    }
    
    mapColumns(headers, requiredColumns) {
        const mapping = {};
        const normalizedHeaders = headers.map(h => h ? h.toString().toLowerCase().trim() : '');
        
        requiredColumns.forEach(required => {
            const index = normalizedHeaders.findIndex(header => 
                header.includes(required) || required.includes(header)
            );
            if (index !== -1) {
                mapping[required] = index;
            }
        });
        
        return mapping;
    }
    
    parseDate(dateValue) {
        if (!dateValue) return null;
        
        try {
            // Handle Excel date serial numbers
            if (typeof dateValue === 'number') {
                const excelEpoch = new Date(1900, 0, 1);
                const date = new Date(excelEpoch.getTime() + (dateValue - 2) * 24 * 60 * 60 * 1000);
                return date.toISOString().split('T')[0];
            }
            
            // Handle date strings
            const date = new Date(dateValue);
            if (!isNaN(date.getTime())) {
                return date.toISOString().split('T')[0];
            }
        } catch (error) {
            console.error('Date parsing error:', error);
        }
        
        return null;
    }
    
    showImportPreview(data, type) {
        const previewDiv = document.getElementById(`${type}Preview`);
        const previewTable = document.getElementById(`${type}PreviewTable`);
        const importCount = document.getElementById(`${type}ImportCount`);
        
        if (!previewDiv || !previewTable || !importCount) return;
        
        // Store data for import
        if (type === 'suppliers') {
            this.importSuppliersData = data;
        } else {
            this.importOrdersData = data;
        }
        
        // Update count
        importCount.textContent = data.length;
        
        // Create table headers
        const headers = type === 'suppliers' 
            ? ['Nom', 'Personne Contact', 'Email', 'Téléphone', 'Adresse']
            : ['Produit', 'Quantité', 'Date', 'Client', 'Statut'];
        
        previewTable.querySelector('thead').innerHTML = `
            <tr>
                ${headers.map(header => `<th>${header}</th>`).join('')}
            </tr>
        `;
        
        // Create table body
        const tbody = previewTable.querySelector('tbody');
        tbody.innerHTML = '';
        
        data.slice(0, 10).forEach(item => { // Show only first 10 rows
            const row = document.createElement('tr');
            
            if (type === 'suppliers') {
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.contactPerson}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.address}</td>
                `;
            } else {
                row.innerHTML = `
                    <td>${item.productName}</td>
                    <td>${item.quantity}</td>
                    <td>${item.orderDate}</td>
                    <td>${item.customerName}</td>
                    <td>${item.status}</td>
                `;
            }
            
            tbody.appendChild(row);
        });
        
        if (data.length > 10) {
            const moreRow = document.createElement('tr');
            moreRow.innerHTML = `<td colspan="${headers.length}" style="text-align: center; font-style: italic; color: var(--text-secondary);">... et ${data.length - 10} autre(s) ligne(s)</td>`;
            tbody.appendChild(moreRow);
        }
        
        previewDiv.style.display = 'block';
    }
    
    confirmImport(type) {
        const data = type === 'suppliers' ? this.importSuppliersData : this.importOrdersData;
        
        if (!data || data.length === 0) {
            this.showNotification('Aucune donnée à importer.', 'error');
            return;
        }
        
        let importedCount = 0;
        
        if (type === 'suppliers') {
            data.forEach(supplierData => {
                const newSupplier = {
                    id: this.suppliers.length ? Math.max(...this.suppliers.map(s => s.id)) + 1 : 1,
                    name: supplierData.name,
                    contactPerson: supplierData.contactPerson,
                    email: supplierData.email,
                    phone: supplierData.phone,
                    address: supplierData.address
                };
                
                this.suppliers.push(newSupplier);
                importedCount++;
            });
            
            this.renderSuppliersTable();
        } else {
            data.forEach(orderData => {
                const newOrder = {
                    id: this.orders.length ? Math.max(...this.orders.map(o => o.id)) + 1 : 1,
                    productName: orderData.productName,
                    quantity: orderData.quantity,
                    orderDate: orderData.orderDate,
                    customerName: orderData.customerName,
                    status: orderData.status,
                    notes: orderData.notes
                };
                
                this.orders.push(newOrder);
                importedCount++;
            });
            
            this.renderOrdersTable();
        }
        
        // Close modal and reset
        document.getElementById(`import${type.charAt(0).toUpperCase() + type.slice(1)}Modal`).classList.remove('show');
        this.resetImportModal(`import${type.charAt(0).toUpperCase() + type.slice(1)}Modal`);
        
        this.showNotification(`${importedCount} ${type === 'suppliers' ? 'fournisseur(s)' : 'commande(s)'} importé(s) avec succès!`, 'success');
    }
    
    resetImportModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        const type = modalId.includes('Suppliers') ? 'suppliers' : 'orders';
        
        // Reset upload area
        this.resetUploadArea(type);
        
        // Hide preview
        const preview = document.getElementById(`${type}Preview`);
        if (preview) {
            preview.style.display = 'none';
        }
        
        // Reset file input
        const fileInput = document.getElementById(`${type}FileInput`);
        if (fileInput) {
            fileInput.value = '';
        }
        
        // Clear stored data
        if (type === 'suppliers') {
            this.importSuppliersData = null;
        } else {
            this.importOrdersData = null;
        }
    }
    
    resetUploadArea(type) {
        const uploadArea = document.getElementById(`${type}UploadArea`);
        if (!uploadArea) return;
        
        uploadArea.innerHTML = `
            <div class="upload-placeholder">
                <i class="fas fa-file-excel"></i>
                <h4>Déposez votre fichier Excel ici</h4>
                <p>ou cliquez pour sélectionner un fichier</p>
                <p class="file-requirements">Formats acceptés: .xlsx, .xls</p>
            </div>
        `;
    }
    
    downloadTemplate(type) {
        const templates = {
            suppliers: [
                ['Nom', 'Personne Contact', 'Email', 'Téléphone', 'Adresse'],
                ['PharmaCorp Example', 'Jean Dupont', 'jean.dupont@pharmacorp.com', '01 23 45 67 89', '123 Rue de la Santé, 75000 Paris'],
                ['MediSupply Ltd', 'Marie Martin', 'marie@medisupply.fr', '04 56 78 90 12', '456 Avenue des Médicaments, 69000 Lyon']
            ],
            orders: [
                ['Produit', 'Quantité', 'Date Commande', 'Client', 'Statut'],
                ['Paracétamol 500mg', '100', '2024-01-15', 'Pharmacie Centrale', 'En attente'],
                ['Aspirine 100mg', '50', '2024-01-16', 'Hôpital Municipal', 'En cours de préparation']
            ]
        };
        
        const worksheet = XLSX.utils.aoa_to_sheet(templates[type]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Template');
        
        const fileName = `template_${type}_${new Date().getFullYear()}_${(new Date().getMonth() + 1).toString().padStart(2, '0')}_${new Date().getDate().toString().padStart(2, '0')}.xlsx`;
        XLSX.writeFile(workbook, fileName);
        
        this.showNotification(`Modèle ${type === 'suppliers' ? 'fournisseurs' : 'commandes'} téléchargé avec succès!`, 'success');
    }

    switchSection(sectionName) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
        
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        const activeSectionElement = document.getElementById(sectionName);
        if (activeSectionElement) {
            activeSectionElement.classList.add('active');
        }
        
        const titles = {
            'dashboard': 'Tableau de Bord',
            'inventory': 'Inventaire',
            'orders': 'Commandes',
            'suppliers': 'Fournisseurs',
            'reports': 'Rapports',
            'traceability': 'Traçabilité',
            'settings': 'Paramètres'
        };
        document.getElementById('pageTitle').textContent = titles[sectionName];
        
        this.currentSection = sectionName;
        
        if (sectionName === 'traceability') {
            this.renderTraceabilitySection();
        }
        
        if (sectionName === 'reports') {
            this.populateSupplierFilter();
            this.renderScheduledReports();
        }
    }
    
    renderInventoryTable() {
        const tbody = document.querySelector('#inventoryTable tbody');
        tbody.innerHTML = '';
        
        const productsToDisplay = this.products.slice(0, 10); 

        productsToDisplay.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div style="font-weight: 500;">${product.name}</div>
                </td>
                <td>${product.category}</td>
                <td>
                    <span style="font-weight: 600; color: ${this.getStockColor(product.stock)}">${product.stock}</span>
                </td>
                <td>€${product.price.toFixed(2)}</td>
                <td>${this.formatDate(product.expiration)}</td>
                <td>
                    <span class="status-badge ${this.getStatusClass(product.status)}">
                        ${this.getStatusText(product.status)}
                    </span>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="pharmaStock.editProduct(${product.id})" title="Modifier">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn" onclick="pharmaStock.deleteProduct(${product.id})" title="Supprimer">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    
    getStockColor(stock) {
        if (stock === 0) return '#ef4444';
        if (stock < 20) return '#f59e0b';
        return '#10b981';
    }
    
    getStatusClass(status) {
        const classes = {
            'in-stock': 'status-in-stock',
            'low-stock': 'status-low-stock',
            'out-of-stock': 'status-out-of-stock',
            'Complétée': 'status-completed',
            'En attente': 'status-pending',
            'En cours de préparation': 'status-processing',
            'Livrée': 'status-delivered',
        };
        return classes[status] || 'status-in-stock';
    }
    
    getStatusText(status) {
        const texts = {
            'in-stock': 'En Stock',
            'low-stock': 'Stock Faible',
            'out-of-stock': 'Rupture',
            'Complétée': 'Complétée',
            'En attente': 'En attente',
            'En cours de préparation': 'Préparation',
            'Livrée': 'Livrée',
        };
        return texts[status] || 'En Stock';
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR');
    }
    
    addProduct(form) {
        const formData = new FormData(form);
        const newProduct = {
            id: this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1,
            name: formData.get('productName'),
            category: formData.get('productCategory'),
            stock: parseInt(formData.get('productQuantity')),
            price: parseFloat(formData.get('productPrice')),
            expiration: formData.get('productExpiration'),
            status: 'in-stock' 
        };
        
        if (newProduct.stock === 0) {
            newProduct.status = 'out-of-stock';
        } else if (newProduct.stock < 20) { 
            newProduct.status = 'low-stock';
        }
        
        this.products.push(newProduct);
        this.renderInventoryTable(); 
        this.updateDashboardStats();
        this.showNotification('Produit ajouté avec succès!', 'success');
    }

    addNewOrder(form) {
        const formData = new FormData(form);
        const newOrder = {
            id: this.orders.length ? Math.max(...this.orders.map(o => o.id)) + 1 : 1,
            productName: formData.get('orderProductName'),
            quantity: parseInt(formData.get('orderQuantity')),
            orderDate: formData.get('orderDate') || new Date().toISOString().split('T')[0],
            customerName: formData.get('orderCustomerName') || 'Client comptoir',
            notes: formData.get('orderNotes'),
            status: 'En attente' 
        };
        this.orders.push(newOrder);
        this.renderOrdersTable();
        this.showNotification('Commande passée avec succès!', 'success');
    }

    addNewSupplier(form) {
        const formData = new FormData(form);
        const newSupplier = {
            id: this.suppliers.length ? Math.max(...this.suppliers.map(s => s.id)) + 1 : 1,
            name: formData.get('supplierName'),
            contactPerson: formData.get('supplierContactPerson'),
            email: formData.get('supplierEmail'),
            phone: formData.get('supplierPhone'),
            address: formData.get('supplierAddress')
        };
        this.suppliers.push(newSupplier);
        this.renderSuppliersTable();
        this.showNotification('Fournisseur ajouté avec succès!', 'success');
    }

    prepareExport(form) {
        const formData = new FormData(form);
        const exportOptions = {
            reportType: formData.get('reportType'),
            startDate: formData.get('reportStartDate'),
            endDate: formData.get('reportEndDate'),
            format: formData.get('reportFormat')
        };
        console.log('Options d\'exportation:', exportOptions);
        this.showNotification(`Rapport de type "${exportOptions.reportType}" prêt pour l'exportation en ${exportOptions.format.toUpperCase()}. (Simulation)`, 'info');
    }
    
    editProduct(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            this.showNotification(`Modification de ${product.name}`, 'info');
        }
    }
    
    deleteProduct(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            this.products = this.products.filter(p => p.id !== id);
            this.renderInventoryTable();
            this.updateDashboardStats();
            this.showNotification('Produit supprimé', 'success');
        }
    }
    
    filterProducts(searchTerm) {
        const rows = document.querySelectorAll('#inventoryTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const isVisible = text.includes(searchTerm.toLowerCase());
            row.style.display = isVisible ? '' : 'none';
        });
    }
    
    initChart() {
        const ctx = document.getElementById('salesChart');
        if (ctx) {
            if (this.salesChartInstance) {
                this.salesChartInstance.destroy();
            }

            this.salesChartInstance = new Chart(ctx, {
                type: 'line',
                data: this.salesData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true, 
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: '#e2e8f0'
                            },
                            ticks: {
                                callback: function(value) {
                                    return '€' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    elements: {
                        point: {
                            radius: 6,
                            hoverRadius: 8
                        }
                    }
                }
            });
        }
    }
    
    startAnimations() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }, index * 150);
        });
        
        const notificationBadge = document.querySelector('.notification-badge');
        if (notificationBadge) {
            setInterval(() => {
                notificationBadge.style.animation = 'pulse 1s ease-in-out';
                setTimeout(() => {
                    notificationBadge.style.animation = '';
                }, 1000);
            }, 5000);
        }
        
        setInterval(() => {
            this.updateDashboardStats(); 
            this.simulateSalesDataUpdate(); 
        }, 30000);
    }
    
    updateDashboardStats() {
        const productsInStockElem = document.querySelector('.stats-grid .stat-card:nth-child(1) .stat-content h3');
        const lowStockElem = document.querySelector('.stats-grid .stat-card:nth-child(2) .stat-content h3');
        const expiredProductsElem = document.querySelector('.stats-grid .stat-card:nth-child(3) .stat-content h3');
        const stockValueElem = document.querySelector('.stats-grid .stat-card:nth-child(4) .stat-content h3');

        if (productsInStockElem) productsInStockElem.textContent = this.products.reduce((sum, p) => sum + p.stock, 0).toLocaleString();
        if (lowStockElem) lowStockElem.textContent = this.products.filter(p => p.stock <= this.alertSettings.stockThreshold && p.stock > 0).length.toLocaleString();
        
        const today = new Date();
        today.setHours(0,0,0,0); 
        if (expiredProductsElem) expiredProductsElem.textContent = this.products.filter(p => new Date(p.expiration) < today).length.toLocaleString();
        
        const totalStockValue = this.products.reduce((sum, p) => sum + (p.stock * p.price), 0);
        if (stockValueElem) stockValueElem.textContent = `€${totalStockValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        
        const criticalAlertsCount = this.alerts.filter(a => a.type === 'critical').length;
        const notificationBadge = document.querySelector('.notification-badge');
        if (notificationBadge) {
            notificationBadge.textContent = criticalAlertsCount + 3; 
        }
    }

    simulateSalesDataUpdate() {
        const lastMonthIndex = this.salesData.labels.length - 1;
        const lastMonthSales = this.salesData.datasets[0].data[lastMonthIndex];
        const newSales = Math.max(5000, lastMonthSales + (Math.random() * 5000 - 2500)); 
        
        const nextMonthAbbrev = new Date(2024, this.salesData.labels.length % 12, 1).toLocaleString('fr-FR', { month: 'short' }).replace('.', '');
        this.salesData.labels.push(nextMonthAbbrev);
        this.salesData.datasets[0].data.push(newSales);

        if (this.salesData.labels.length > 7) {
            this.salesData.labels.shift();
            this.salesData.datasets[0].data.shift();
        }

        if (this.salesChartInstance) {
            this.salesChartInstance.data.labels = [...this.salesData.labels];
            this.salesChartInstance.data.datasets[0].data = [...this.salesData.datasets[0].data];
            this.salesChartInstance.update();
        }
    }
    
    updateRecentActivity() {
        const activityList = document.querySelector('.recent-activity .activity-list');
        if (!activityList) return;

        activityList.innerHTML = ''; 

        const activities = [
            { icon: 'fa-plus-circle', text: `Nouveau stock: ${this.products[0]?.name || 'Produit X'}`, time: 'Il y a 1 heure', color: 'var(--secondary-color)' },
            { icon: 'fa-minus-circle', text: `Stock faible: ${this.products.find(p => p.status === 'low-stock')?.name || 'Produit Y'}`, time: 'Il y a 3 heures', color: 'var(--warning-color)' },
            { icon: 'fa-truck', text: `Livraison reçue de ${this.suppliers[0]?.name || 'Fournisseur Z'}`, time: 'Hier', color: 'var(--primary-color)' },
            { icon: 'fa-shopping-cart', text: `Nouvelle commande: ${this.orders[0]?.productName || 'Commande A'}`, time: 'Aujourd\'hui à 10:30', color: 'var(--primary-dark)'},
            { icon: 'fa-calendar-times', text: `Alerte expiration: ${this.products.find(p => new Date(p.expiration) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))?.name || 'Produit Z'}`, time: 'Demain', color: 'var(--danger-color)'}
        ];

        activities.forEach(activity => {
            const item = document.createElement('div');
            item.className = 'activity-item';
            item.innerHTML = `
                <i class="fas ${activity.icon}" style="background-color: ${activity.color};"></i>
                <div>
                    <p>${activity.text}</p>
                    <span>${activity.time}</span>
                </div>
            `;
            activityList.appendChild(item);
        });
    }

    renderAll() {
        this.renderInventoryTable();
        this.renderOrdersTable();
        this.renderSuppliersTable();
        this.renderTraceabilitySection();
        this.renderAlertsSection();
    }

    renderOrdersTable() {
        const ordersContent = document.querySelector('#orders .orders-content');
        if (!ordersContent) return;

        if (this.orders.length === 0) {
            ordersContent.innerHTML = '<p>Aucune commande pour le moment.</p>';
            return;
        }

        let tableHTML = `
            <div class="table-container">
                <table class="data-table" id="ordersTable">
                    <thead>
                        <tr>
                            <th>ID Commande</th>
                            <th>Produit</th>
                            <th>Quantité</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        this.orders.forEach(order => {
            tableHTML += `
                <tr>
                    <td>#${order.id}</td>
                    <td>${order.productName}</td>
                    <td>${order.quantity}</td>
                    <td>${order.customerName}</td>
                    <td>${this.formatDate(order.orderDate)}</td>
                    <td>
                        <span class="status-badge ${this.getStatusClass(order.status)}">
                            ${this.getStatusText(order.status)}
                        </span>
                    </td>
                    <td>
                        <div class="action-buttons">
                            <button class="action-btn" title="Voir Détails">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="action-btn" title="Modifier Statut">
                                <i class="fas fa-truck-loading"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });

        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;
        ordersContent.innerHTML = tableHTML;
    }

    renderSuppliersTable() {
        const suppliersContent = document.querySelector('#suppliers .suppliers-content');
        if(!suppliersContent) return;

        if (this.suppliers.length === 0) {
            suppliersContent.innerHTML = '<p>Aucun fournisseur enregistré.</p>';
            return;
        }

        let cardsHTML = '<div class="suppliers-grid">';

        this.suppliers.forEach(supplier => {
            cardsHTML += `
                <div class="supplier-card">
                    <div class="supplier-card-header">
                        <h4>${supplier.name}</h4>
                        <div class="action-buttons">
                             <button class="action-btn" title="Modifier"><i class="fas fa-edit"></i></button>
                             <button class="action-btn" title="Supprimer"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="supplier-card-body">
                        <p><i class="fas fa-user"></i> ${supplier.contactPerson || 'N/A'}</p>
                        <p><i class="fas fa-envelope"></i> ${supplier.email || 'N/A'}</p>
                        <p><i class="fas fa-phone"></i> ${supplier.phone || 'N/A'}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${supplier.address || 'N/A'}</p>
                    </div>
                </div>
            `;
        });
        cardsHTML += '</div>';
        suppliersContent.innerHTML = cardsHTML;
    }

    renderTraceabilitySection() {
        this.renderBatchCards();
        this.renderMovementHistory();
        this.populateBatchFormSelects();
    }

    renderBatchCards() {
        const batchCardsContainer = document.getElementById('batchCards');
        if (!batchCardsContainer) return;

        batchCardsContainer.innerHTML = '';

        this.batches.forEach(batch => {
            const expirationDate = new Date(batch.expirationDate);
            const today = new Date();
            const daysUntilExpiration = Math.ceil((expirationDate - today) / (1000 * 60 * 60 * 24));
            
            let statusClass = '';
            if (daysUntilExpiration < 0) {
                statusClass = 'expired';
            } else if (daysUntilExpiration < 30) {
                statusClass = 'expiring-soon';
            }

            const card = document.createElement('div');
            card.className = `batch-card ${statusClass}`;
            card.innerHTML = `
                <div class="batch-card-header">
                    <h4>${batch.batchNumber}</h4>
                    <span class="batch-quantity">${batch.quantity}/${batch.initialQuantity}</span>
                </div>
                <div class="batch-card-body">
                    <p><strong>${batch.productName}</strong></p>
                    <p>Série: ${batch.serialNumber}</p>
                    <p>Expiration: ${this.formatDate(batch.expirationDate)}</p>
                    <p>Fournisseur: ${batch.supplierName}</p>
                </div>
            `;
            
            card.addEventListener('click', () => this.showBatchDetails(batch.id));
            batchCardsContainer.appendChild(card);
        });
    }

    renderMovementHistory() {
        const tbody = document.querySelector('#movementHistoryTable tbody');
        if (!tbody) return;

        tbody.innerHTML = '';

        const sortedMovements = this.movementHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        sortedMovements.forEach(movement => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${this.formatDateTime(movement.timestamp)}</td>
                <td>${movement.productName}</td>
                <td>${movement.batchNumber}</td>
                <td>${movement.serialNumber}</td>
                <td>
                    <span class="movement-type movement-${movement.movementType}">
                        ${this.getMovementTypeText(movement.movementType)}
                    </span>
                </td>
                <td>
                    <span class="quantity-change ${movement.quantityChange.startsWith('+') ? 'quantity-positive' : 'quantity-negative'}">
                        ${movement.quantityChange}
                    </span>
                </td>
                <td>${movement.userId}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="pharmaStock.showMovementDetails(${movement.id})" title="Voir Détails">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    formatDateTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    getMovementTypeText(type) {
        const types = {
            'entry': 'Entrée',
            'exit': 'Sortie',
            'transfer': 'Transfert',
            'adjustment': 'Ajustement'
        };
        return types[type] || type;
    }

    populateBatchFormSelects() {
        const productSelect = document.getElementById('batchProductSelect');
        const supplierSelect = document.getElementById('batchSupplier');

        if (productSelect) {
            productSelect.innerHTML = '<option value="">Sélectionner un produit</option>';
            this.products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                productSelect.appendChild(option);
            });
        }

        if (supplierSelect) {
            supplierSelect.innerHTML = '<option value="">Sélectionner un fournisseur</option>';
            this.suppliers.forEach(supplier => {
                const option = document.createElement('option');
                option.value = supplier.id;
                option.textContent = supplier.name;
                supplierSelect.appendChild(option);
            });
        }
    }

    addNewBatch(form) {
        const formData = new FormData(form);
        const selectedProduct = this.products.find(p => p.id == formData.get('batchProductSelect'));
        const selectedSupplier = this.suppliers.find(s => s.id == formData.get('batchSupplier'));
        
        const newBatch = {
            id: this.batches.length ? Math.max(...this.batches.map(b => b.id)) + 1 : 1,
            productId: parseInt(formData.get('batchProductSelect')),
            productName: selectedProduct ? selectedProduct.name : '',
            batchNumber: formData.get('batchNumber'),
            serialNumber: formData.get('serialNumber') || `SN-${Date.now()}`,
            quantity: parseInt(formData.get('batchQuantity')),
            initialQuantity: parseInt(formData.get('batchQuantity')),
            expirationDate: formData.get('batchExpirationDate'),
            supplierId: parseInt(formData.get('batchSupplier')),
            supplierName: selectedSupplier ? selectedSupplier.name : '',
            createdDate: new Date().toISOString().split('T')[0],
            status: 'active',
            notes: formData.get('batchNotes') || ''
        };

        this.batches.push(newBatch);

        const newMovement = {
            id: this.movementHistory.length ? Math.max(...this.movementHistory.map(m => m.id)) + 1 : 1,
            productId: newBatch.productId,
            productName: newBatch.productName,
            batchId: newBatch.id,
            batchNumber: newBatch.batchNumber,
            serialNumber: newBatch.serialNumber,
            movementType: 'entry',
            quantity: newBatch.quantity,
            quantityChange: `+${newBatch.quantity}`,
            timestamp: new Date().toISOString(),
            userId: 'Dr. Martin',
            notes: `Création nouveau lot - ${newBatch.notes}`,
            location: 'Entrepôt Principal'
        };

        this.movementHistory.push(newMovement);

        this.renderTraceabilitySection();
        this.showNotification('Nouveau lot enregistré avec succès!', 'success');
    }

    showBatchDetails(batchId) {
        const batch = this.batches.find(b => b.id === batchId);
        if (!batch) return;

        const batchMovements = this.movementHistory.filter(m => m.batchId === batchId);
        
        let detailsHTML = `
            <div class="batch-details">
                <h4>Lot: ${batch.batchNumber}</h4>
                <div class="batch-info-grid">
                    <div class="info-item">
                        <strong>Produit:</strong> ${batch.productName}
                    </div>
                    <div class="info-item">
                        <strong>Numéro de série:</strong> ${batch.serialNumber}
                    </div>
                    <div class="info-item">
                        <strong>Quantité actuelle:</strong> ${batch.quantity}/${batch.initialQuantity}
                    </div>
                    <div class="info-item">
                        <strong>Date d'expiration:</strong> ${this.formatDate(batch.expirationDate)}
                    </div>
                    <div class="info-item">
                        <strong>Fournisseur:</strong> ${batch.supplierName}
                    </div>
                    <div class="info-item">
                        <strong>Date de création:</strong> ${this.formatDate(batch.createdDate)}
                    </div>
                </div>
                <div class="batch-movements">
                    <h5>Historique des mouvements</h5>
                    <div class="movements-list">
        `;
        
        batchMovements.forEach(movement => {
            detailsHTML += `
                <div class="movement-item">
                    <div class="movement-header">
                        <span class="movement-type movement-${movement.movementType}">
                            ${this.getMovementTypeText(movement.movementType)}
                        </span>
                        <span class="movement-date">${this.formatDateTime(movement.timestamp)}</span>
                    </div>
                    <div class="movement-details">
                        <p><strong>Quantité:</strong> ${movement.quantityChange}</p>
                        <p><strong>Utilisateur:</strong> ${movement.userId}</p>
                        <p><strong>Notes:</strong> ${movement.notes}</p>
                    </div>
                </div>
            `;
        });

        detailsHTML += `
                    </div>
                </div>
            </div>
        `;

        document.getElementById('movementDetailsBody').innerHTML = detailsHTML;
        document.getElementById('movementDetailsModal').classList.add('show');
    }

    showMovementDetails(movementId) {
        const movement = this.movementHistory.find(m => m.id === movementId);
        if (!movement) return;

        const detailsHTML = `
            <div class="movement-full-details">
                <h4>Détails du Mouvement #${movement.id}</h4>
                <div class="movement-info-grid">
                    <div class="info-item">
                        <strong>Date/Heure:</strong> ${this.formatDateTime(movement.timestamp)}
                    </div>
                    <div class="info-item">
                        <strong>Type:</strong> 
                        <span class="movement-type movement-${movement.movementType}">
                            ${this.getMovementTypeText(movement.movementType)}
                        </span>
                    </div>
                    <div class="info-item">
                        <strong>Produit:</strong> ${movement.productName}
                    </div>
                    <div class="info-item">
                        <strong>Numéro de lot:</strong> ${movement.batchNumber}
                    </div>
                    <div class="info-item">
                        <strong>Numéro de série:</strong> ${movement.serialNumber}
                    </div>
                    <div class="info-item">
                        <strong>Quantité:</strong> 
                        <span class="quantity-change ${movement.quantityChange.startsWith('+') ? 'quantity-positive' : 'quantity-negative'}">
                            ${movement.quantityChange}
                        </span>
                    </div>
                    <div class="info-item">
                        <strong>Utilisateur:</strong> ${movement.userId}
                    </div>
                    ${movement.location ? `<div class="info-item"><strong>Localisation:</strong> ${movement.location}</div>` : ''}
                    ${movement.customerReference ? `<div class="info-item"><strong>Référence client:</strong> ${movement.customerReference}</div>` : ''}
                    ${movement.transferReference ? `<div class="info-item"><strong>Référence transfert:</strong> ${movement.transferReference}</div>` : ''}
                    <div class="info-item full-width">
                        <strong>Notes:</strong> ${movement.notes}
                    </div>
                </div>
            </div>
        `;

        document.getElementById('movementDetailsBody').innerHTML = detailsHTML;
        document.getElementById('movementDetailsModal').classList.add('show');
    }

    filterMovementHistory() {
        const searchTerm = document.getElementById('batchSearchInput')?.value.toLowerCase() || '';
        const movementType = document.getElementById('movementTypeFilter')?.value || '';
        const dateFrom = document.getElementById('dateFromFilter')?.value || '';
        const dateTo = document.getElementById('dateToFilter')?.value || '';

        const rows = document.querySelectorAll('#movementHistoryTable tbody tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const productName = cells[1]?.textContent.toLowerCase() || '';
            const batchNumber = cells[2]?.textContent.toLowerCase() || '';
            const serialNumber = cells[3]?.textContent.toLowerCase() || '';
            const movementTypeText = cells[4]?.textContent.toLowerCase() || '';
            const movementDate = cells[0]?.textContent || '';

            let isVisible = true;

            if (searchTerm && !productName.includes(searchTerm) && 
                !batchNumber.includes(searchTerm) && 
                !serialNumber.includes(searchTerm)) {
                isVisible = false;
            }

            if (movementType && !movementTypeText.includes(movementType)) {
                isVisible = false;
            }

            if (dateFrom || dateTo) {
                const rowDate = new Date(movementDate.split(' ')[0].split('/').reverse().join('-'));
                if (dateFrom && rowDate < new Date(dateFrom)) {
                    isVisible = false;
                }
                if (dateTo && rowDate > new Date(dateTo)) {
                    isVisible = false;
                }
            }

            row.style.display = isVisible ? '' : 'none';
        });
    }

    checkAlerts() {
        this.alerts = [];
        const now = new Date();
        
        this.products.forEach(product => {
            if (product.stock <= this.alertSettings.stockThreshold && product.stock > 0) {
                this.alerts.push({
                    id: `stock-${product.id}`,
                    type: 'warning',
                    priority: 'high',
                    title: 'Stock Faible',
                    description: `${product.name} - Seulement ${product.stock} unités restantes`,
                    productId: product.id,
                    productName: product.name,
                    timestamp: now,
                    category: 'stock',
                    actionRequired: true
                });
            }
            
            if (product.stock === 0) {
                this.alerts.push({
                    id: `outofstock-${product.id}`,
                    type: 'critical',
                    priority: 'urgent',
                    title: 'Rupture de Stock',
                    description: `${product.name} - Stock épuisé`,
                    productId: product.id,
                    productName: product.name,
                    timestamp: now,
                    category: 'stock',
                    actionRequired: true
                });
            }
            
            const expirationDate = new Date(product.expiration);
            const daysUntilExpiration = Math.ceil((expirationDate - now) / (1000 * 60 * 60 * 24));
            
            if (daysUntilExpiration <= 0) {
                this.alerts.push({
                    id: `expired-${product.id}`,
                    type: 'critical',
                    priority: 'urgent',
                    title: 'Produit Expiré',
                    description: `${product.name} - Expiré depuis ${Math.abs(daysUntilExpiration)} jour(s)`,
                    productId: product.id,
                    productName: product.name,
                    timestamp: now,
                    category: 'expiration',
                    actionRequired: true
                });
            } else if (daysUntilExpiration <= this.alertSettings.expirationDays) {
                this.alerts.push({
                    id: `expiring-${product.id}`,
                    type: 'warning',
                    priority: 'medium',
                    title: 'Expiration Proche',
                    description: `${product.name} - Expire dans ${daysUntilExpiration} jour(s)`,
                    productId: product.id,
                    productName: product.name,
                    timestamp: now,
                    category: 'expiration',
                    actionRequired: false
                });
            }
        });
        
        this.alerts.sort((a, b) => {
            const priorityOrder = { 'urgent': 3, 'high': 2, 'medium': 1, 'low': 0 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        
        this.processEmailAlerts();
        this.renderAlertsSection();
    }

    renderAlertsSection() {
        const alertsContainer = document.getElementById('alertsContainer');
        if (!alertsContainer) return;
        
        if (this.alerts.length === 0) {
            alertsContainer.innerHTML = `
                <div class="no-alerts">
                    <i class="fas fa-check-circle"></i>
                    <h4>Aucune alerte</h4>
                    <p>Tous vos produits sont dans des conditions normales</p>
                </div>
            `;
            return;
        }
        
        let alertsHTML = `
            <div class="alerts-header">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Alertes Actives</h3>
                <span class="alerts-count">${this.alerts.length}</span>
            </div>
            <div class="alerts-list">
        `;
        
        this.alerts.forEach(alert => {
            const timeAgo = this.getTimeAgo(alert.timestamp);
            alertsHTML += `
                <div class="alert-item alert-${alert.type}" data-alert-id="${alert.id}">
                    <div class="alert-icon">
                        <i class="fas fa-${alert.type === 'critical' ? 'exclamation-circle' : 'exclamation-triangle'}"></i>
                    </div>
                    <div class="alert-content">
                        <div class="alert-title">${alert.title}</div>
                        <div class="alert-description">${alert.description}</div>
                        <div class="alert-time">${timeAgo}</div>
                    </div>
                    <div class="alert-actions">
                        ${alert.actionRequired ? `
                            <button class="alert-action-btn alert-action-primary" onclick="pharmaStock.handleAlert('${alert.id}', 'action')">
                                ${alert.category === 'stock' ? 'Commander' : 'Vérifier'}
                            </button>
                        ` : ''}
                        <button class="alert-action-btn alert-action-secondary" onclick="pharmaStock.handleAlert('${alert.id}', 'dismiss')">
                            Ignorer
                        </button>
                    </div>
                    ${alert.type === 'critical' ? '<div class="alert-badge"></div>' : ''}
                </div>
            `;
        });
        
        alertsHTML += '</div>';
        alertsContainer.innerHTML = alertsHTML;
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (days > 0) return `il y a ${days} jour${days > 1 ? 's' : ''}`;
        if (hours > 0) return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        if (minutes > 0) return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        return 'À l\'instant';
    }

    handleAlert(alertId, action) {
        const alert = this.alerts.find(a => a.id === alertId);
        if (!alert) return;
        
        if (action === 'action') {
            if (alert.category === 'stock') {
                this.showNotification(`Commande automatique suggérée pour ${alert.productName}`, 'info');
            } else if (alert.category === 'expiration') {
                this.showNotification(`Vérification programmée pour ${alert.productName}`, 'info');
            }
        } else if (action === 'dismiss') {
            this.alerts = this.alerts.filter(a => a.id !== alertId);
            this.renderAlertsSection();
            this.showNotification('Alerte ignorée', 'success');
        }
    }

    processEmailAlerts() {
        if (!this.alertSettings.emailEnabled) return;
        
        const criticalAlerts = this.alerts.filter(alert => alert.type === 'critical');
        const now = Date.now();
        
        criticalAlerts.forEach(alert => {
            const lastSent = this.lastEmailSent[alert.id];
            const hoursSinceLastEmail = lastSent ? (now - lastSent) / (1000 * 60 * 60) : 24;
            
            if (hoursSinceLastEmail >= 12) {
                this.sendEmailAlert(alert);
                this.lastEmailSent[alert.id] = now;
            }
        });
    }

    sendEmailAlert(alert) {
        console.log('Sending email alert:', alert);
        
        const emailContent = {
            to: this.alertSettings.emailRecipients,
            subject: `PharmaStock - Alerte Critique: ${alert.title}`,
            body: `
                Alerte critique détectée:
                
                Produit: ${alert.productName}
                Type d'alerte: ${alert.title}
                Description: ${alert.description}
                Heure: ${alert.timestamp.toLocaleString('fr-FR')}
                
                Action requise: Veuillez vérifier immédiatement ce produit dans le système PharmaStock.
                
                Cordialement,
                Système de Gestion PharmaStock
            `
        };
        
        this.showEmailToast(alert);
        
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Email sent successfully:', emailContent);
                resolve(true);
            }, 1000);
        });
    }

    showEmailToast(alert) {
        const toast = document.createElement('div');
        toast.className = 'email-toast';
        toast.innerHTML = `
            <div class="email-toast-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="email-toast-content">
                <h4>Email d'alerte envoyé</h4>
                <p>Alerte critique: ${alert.title}</p>
                <p>Destinataires: ${this.alertSettings.emailRecipients.length} personne(s)</p>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 4000);
    }

    startAlertMonitoring() {
        setInterval(() => {
            this.checkAlerts();
        }, 5 * 60 * 1000);
        
        setInterval(() => {
            this.renderAlertsSection();
        }, 60 * 1000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#4f46e5'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 3000;
            transform: translateX(400px);
            transition: transform 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    updateProfile(form) {
        const formData = new FormData(form);
        const profileData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            title: formData.get('title'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            license: formData.get('license')
        };
        
        console.log('Profile updated:', profileData);
        this.showNotification('Profil mis à jour avec succès!', 'success');
        
        // Update the display name in the header
        const userNameSpan = document.querySelector('.user-profile span');
        if (userNameSpan) {
            userNameSpan.textContent = `Dr. ${profileData.firstName}`;
        }
    }

    updatePreferences(form) {
        const formData = new FormData(form);
        const preferences = {
            theme: formData.get('theme'),
            language: formData.get('language'),
            stockThreshold: parseInt(formData.get('stockThreshold')),
            expirationDays: parseInt(formData.get('expirationDays')),
            emailAlerts: formData.get('emailAlerts') === 'on'
        };
        
        // Update alert settings
        this.alertSettings.stockThreshold = preferences.stockThreshold;
        this.alertSettings.expirationDays = preferences.expirationDays;
        this.alertSettings.emailEnabled = preferences.emailAlerts;
        
        console.log('Preferences updated:', preferences);
        this.showNotification('Préférences sauvegardées avec succès!', 'success');
        
        // Recheck alerts with new settings
        this.checkAlerts();
    }

    updateNotificationSettings(form) {
        const formData = new FormData(form);
        const settings = {
            emailFrequency: formData.get('emailFrequency'),
            emailTime: formData.get('emailTime')
        };
        
        console.log('Notification settings updated:', settings);
        this.showNotification('Paramètres de notification mis à jour!', 'success');
    }

    renderScheduledReports() {
        const scheduledList = document.getElementById('scheduledReportsList');
        if (!scheduledList) return;

        // Sample scheduled reports
        const scheduledReports = [
            {
                id: 1,
                name: 'Rapport Mensuel Inventaire',
                type: 'inventory',
                frequency: 'monthly',
                nextRun: '2024-08-01',
                status: 'active'
            },
            {
                id: 2,
                name: 'Alertes Hebdomadaires',
                type: 'alerts-summary',
                frequency: 'weekly',
                nextRun: '2024-07-29',
                status: 'active'
            }
        ];
        
        if (scheduledReports.length === 0) {
            scheduledList.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-secondary);">Aucun rapport programmé</p>';
            return;
        }
        
        scheduledList.innerHTML = scheduledReports.map(report => `
            <div class="scheduled-report-item">
                <div class="scheduled-report-info">
                    <h4>${report.name}</h4>
                    <p>Type: ${this.getReportTypeName(report.type)} • Fréquence: ${report.frequency}</p>
                </div>
                <div class="scheduled-report-schedule">
                    <i class="fas fa-clock"></i>
                    <span>Prochaine exécution: ${this.formatDate(report.nextRun)}</span>
                </div>
                <div class="scheduled-report-actions">
                    <span class="report-status ${report.status}">${report.status === 'active' ? 'Actif' : 'Pausé'}</span>
                    <button class="action-btn" title="Modifier">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn" title="Supprimer">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

const pharmaStock = new PharmaStockManager();

window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        sidebar.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // Reinitialize chart on significant size changes
    if (pharmaStock && pharmaStock.salesChartInstance) {
        clearTimeout(pharmaStock.resizeTimeout);
        pharmaStock.resizeTimeout = setTimeout(() => {
            pharmaStock.salesChartInstance.resize();
        }, 250);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'k':
                e.preventDefault();
                document.querySelector('.search-box input').focus();
                break;
            case 'n':
                e.preventDefault();
                document.getElementById('addProductBtn').click();
                break;
        }
    }
    
    if (e.key === 'Escape') {
        const modal = document.getElementById('addProductModal');
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
    });
}