export type Language = 'en' | 'de' | 'fr' | 'it' | 'es' | 'ru';

export const translations = {
    en: {
        hero: {
            badge_enc: "256-bit Encryption",
            badge_anon: "100% Anonymous",
            badge_nologs: "No Logs Policy",
            system_status: "System Online • Database Updated",
            title_start: "Uncover the truth in",
            title_highlight: "60 seconds",
            subtitle: "Professional OSINT search across digital footprints",
            desc: "We analyze public digital traces from 120+ open sources. Instantly see where matches are found.",
            input_placeholder: "Email or phone number (e.g. +1...)",
            btn_start: "Start Scan",
            btn_scanning: "Scanning...",
            error_msg: "Please enter a valid email or phone number",
            footer_note: "Free: list of found services. Full PDF Report: links, dates, correlations."
        },
        steps: {
            s1_title: "Input Data",
            s1_desc: "Enter email or phone. System normalizes data and prepares search masks.",
            s2_title: "Scan Registries",
            s2_desc: "Algorithm checks 120+ open sources, social networks and leaks in real-time.",
            s3_title: "Generate Report",
            s3_desc: "We aggregate all digital traces into a single analytics PDF report."
        },
        modal: {
            title: "Scanning open sources...",
            status_init: "Initializing OSINT modules...",
            status_processing: "PROCESSING REPOSITORIES",
            status_complete: "ANALYSIS COMPLETE",
            cancel: "Cancel"
        },
        results: {
            badge_complete: "Analysis Complete",
            title: "Potential Traces Found",
            subtitle: "We found traces in public databases. Full report includes direct links and history.",
            found_accounts: "Confirmed Accounts",
            private_data: "Private Data",
            hidden_details: "Details hidden. Available in full report.",
            cta_button: "Download Full PDF Report",
            cta_secure: "Instant email delivery. 100% anonymous.",
            price_tag: "One-time fee: ",
            price_amount: "7.90",
            currency_symbol: "$",
            secure_delivery: "Delivery via secure encrypted email",
            purchase_button: "Complete Purchase",
        },
        how_it_works: {
            title: "How It Works",
            step1_title: "Enter Target Info",
            step1_desc: "Provide username, email, or phone number",
            step2_title: "Global Scan",
            step2_desc: "AI scans 50+ networks in real-time",
            step2_time: "~ 30 sec",
            step3_title: "Receive Report",
            step3_desc: "Get a detailed PDF report instantly",
            step3_time: "Instant"
        },
        bento: {
            social_profiles: "Social Profiles",
            location_data: "Location Data",
            status_updates: "Activity Status",
            found: "Found",
            match: "Match",
            active_now: "Active Now"
        },
        value_prop: {
            title: "What do you get?",
            subtitle: "Complete digital footprint analysis in one document",
            feat1_title: "Social Graph",
            feat1_desc: "Connections between accounts, friends, and colleagues.",
            feat2_title: "Geolocation",
            feat2_desc: "Map of movements and frequent locations.",
            feat3_title: "Hidden Photos",
            feat3_desc: "Photos from private profiles and archives.",
            feat4_title: "IP History",
            feat4_desc: "List of IP addresses and login devices."
        }
    },
    de: {
        hero: {
            badge_enc: "256-Bit Verschlüsselung",
            badge_anon: "100% Anonym",
            badge_nologs: "Keine Logs",
            system_status: "System Online • Datenbank Aktualisiert",
            title_start: "Die Wahrheit in",
            title_highlight: "60 Sekunden",
            subtitle: "Professionelle OSINT-Suche nach digitalen Spuren",
            desc: "Wir analysieren öffentliche digitale Spuren aus 120+ Quellen. Sehen Sie sofort Treffer.",
            input_placeholder: "E-Mail oder Telefonnummer (z.B. +49...)",
            btn_start: "Starten",
            btn_scanning: "Scan läuft...",
            error_msg: "Bitte geben Sie eine gültige E-Mail oder Telefonnummer ein",
            footer_note: "Kostenlos: Liste gefundener Dienste. Vollständiger PDF-Bericht: Links, Daten."
        },
        steps: {
            s1_title: "Daten eingeben",
            s1_desc: "Geben Sie E-Mail oder Telefon ein. System normalisiert Daten.",
            s2_title: "Register scannen",
            s2_desc: "Algorithmus prüft 120+ offene Quellen und Leaks in Echtzeit.",
            s3_title: "Bericht erstellen",
            s3_desc: "Wir fassen alle digitalen Spuren in einem PDF zusammen."
        },
        modal: {
            title: "Scanne offene Quellen...",
            status_init: "Initialisiere OSINT-Module...",
            status_processing: "VERARBEITE REPOSITORIES",
            status_complete: "ANALYSE ABGESCHLOSSEN",
            cancel: "Abbrechen"
        },
        results: {
            badge_complete: "Analyse abgeschlossen",
            title: "Potenzielle Spuren gefunden",
            subtitle: "Spuren in Datenbanken gefunden. Vollständiger Bericht enthält Links.",
            found_accounts: "Bestätigte Konten",
            private_data: "Private Daten",
            hidden_details: "Details ausgeblendet. Im vollen Bericht verfügbar.",
            cta_button: "Vollständigen PDF-Bericht laden",
            cta_secure: "Sofortige E-Mail-Lieferung. 100% anonym.",
            price_tag: "Einmalige Gebühr: ",
            price_amount: "7.90",
            currency_symbol: "€",
            secure_delivery: "Lieferung per sicherer verschlüsselter E-Mail",
            purchase_button: "Kauf abschließen",
        },
        how_it_works: {
            title: "Wie es funktioniert",
            step1_title: "Zielinfo eingeben",
            step1_desc: "Benutzername, E-Mail oder Telefonnummer angeben",
            step2_title: "Globaler Scan",
            step2_desc: "KI scannt 50+ Netzwerke in Echtzeit",
            step2_time: "~ 30 Sek",
            step3_title: "Bericht erhalten",
            step3_desc: "Detaillierten PDF-Bericht sofort erhalten",
            step3_time: "Sofort"
        },
        bento: {
            social_profiles: "Soziale Profile",
            location_data: "Standortdaten",
            status_updates: "Aktivitätsstatus",
            found: "Gefunden",
            match: "Treffer",
            active_now: "Jetzt aktiv"
        },
        value_prop: {
            title: "Was erhalten Sie?",
            subtitle: "Vollständige Analyse digitaler Spuren in einem Dokument",
            feat1_title: "Sozialgraph",
            feat1_desc: "Verbindungen zwischen Konten und Freunden.",
            feat2_title: "Geolokalisierung",
            feat2_desc: "Bewegungskarte und häufige Orte.",
            feat3_title: "Versteckte Fotos",
            feat3_desc: "Fotos aus privaten Profilen.",
            feat4_title: "IP-Historie",
            feat4_desc: "Liste der IP-Adressen und Geräte."
        }
    },
    fr: {
        hero: {
            badge_enc: "Chiffrement 256-bit",
            badge_anon: "100% Anonyme",
            badge_nologs: "Pas de journaux",
            system_status: "Système en ligne • Base à jour",
            title_start: "La vérité en",
            title_highlight: "60 secondes",
            subtitle: "Recherche OSINT professionnelle d'empreintes numériques",
            desc: "Nous analysons les traces publiques de 120+ sources. Voyez instantanément les résultats.",
            input_placeholder: "Email ou téléphone (ex. +33...)",
            btn_start: "Commencer",
            btn_scanning: "Scan en cours...",
            error_msg: "Veuillez entrer un email ou un téléphone valide",
            footer_note: "Gratuit : liste des services. Rapport PDF complet : liens, dates, corrélations."
        },
        steps: {
            s1_title: "Saisie des données",
            s1_desc: "Entrez email ou téléphone. Le système normalise les données.",
            s2_title: "Scan des registres",
            s2_desc: "L'algorithme vérifie 120+ sources ouvertes et fuites en temps réel.",
            s3_title: "Génération de rapport",
            s3_desc: "Nous regroupons toutes les traces dans un rapport PDF unique."
        },
        modal: {
            title: "Scan des sources ouvertes...",
            status_init: "Initialisation des modules OSINT...",
            status_processing: "TRAITEMENT DES DÉPÔTS",
            status_complete: "ANALYSE TERMINÉE",
            cancel: "Annuler"
        },
        results: {
            badge_complete: "Analyse terminée",
            title: "Traces potentielles trouvées",
            subtitle: "Traces trouvées dans les bases. Le rapport complet inclut les liens.",
            found_accounts: "Comptes confirmés",
            private_data: "Données privées",
            hidden_details: "Détails masqués. Disponible dans le rapport complet.",
            cta_button: "Télécharger le rapport PDF",
            cta_secure: "Livraison email instantanée. 100% anonyme.",
            price_tag: "Frais unique : ",
            price_amount: "7.90",
            currency_symbol: "€",
            secure_delivery: "Livraison via email crypté sécurisé",
            purchase_button: "Finaliser l'achat",
        },
        how_it_works: {
            title: "Comment ça marche",
            step1_title: "Entrer les infos",
            step1_desc: "Fournir nom d'utilisateur, email ou téléphone",
            step2_title: "Scan Global",
            step2_desc: "L'IA scanne 50+ réseaux en temps réel",
            step2_time: "~ 30 sec",
            step3_title: "Recevoir le rapport",
            step3_desc: "Obtenez un rapport PDF détaillé instantanément",
            step3_time: "Instantané"
        },
        bento: {
            social_profiles: "Profils Sociaux",
            location_data: "Données de Localisation",
            status_updates: "Statut d'Activité",
            found: "Trouvé",
            match: "Correspondance",
            active_now: "Actif maintenant"
        },
        value_prop: {
            title: "Que recevez-vous ?",
            subtitle: "Analyse complète des empreintes numériques",
            feat1_title: "Graphe Social",
            feat1_desc: "Connexions entre comptes et amis.",
            feat2_title: "Géolocalisation",
            feat2_desc: "Carte des mouvements et lieux fréquents.",
            feat3_title: "Photos Cachées",
            feat3_desc: "Photos de profils privés.",
            feat4_title: "Historique IP",
            feat4_desc: "Liste des adresses IP et appareils."
        }
    },
    it: {
        hero: {
            badge_enc: "Crittografia 256-bit",
            badge_anon: "100% Anonimo",
            badge_nologs: "No Log",
            system_status: "Sistema Online • Database Aggiornato",
            title_start: "La verità in",
            title_highlight: "60 secondi",
            subtitle: "Ricerca OSINT professionale di impronte digitali",
            desc: "Analizziamo tracce pubbliche da 120+ fonti. Vedi subito le corrispondenze.",
            input_placeholder: "Email o telefono (es. +39...)",
            btn_start: "Inizia",
            btn_scanning: "Scansione...",
            error_msg: "Inserisci un'email o un numero valido",
            footer_note: "Gratuito: lista servizi. Report PDF completo: link, date."
        },
        steps: {
            s1_title: "Inserimento dati",
            s1_desc: "Inserisci email o telefono. Il sistema normalizza i dati.",
            s2_title: "Scansione registri",
            s2_desc: "L'algoritmo controlla 120+ fonti aperte e leak in tempo reale.",
            s3_title: "Generazione report",
            s3_desc: "Aggreghiamo tutte le tracce in un unico report PDF."
        },
        modal: {
            title: "Scansione fonti aperte...",
            status_init: "Inizializzazione moduli OSINT...",
            status_processing: "ELABORAZIONE REPOSITORY",
            status_complete: "ANALISI COMPLETATA",
            cancel: "Annulla"
        },
        results: {
            badge_complete: "Analisi completata",
            title: "Tracce potenziali trovate",
            subtitle: "Tracce trovate nei database. Il report completo include i link.",
            found_accounts: "Account confermati",
            private_data: "Dati privati",
            hidden_details: "Dettagli nascosti. Disponibile nel report completo.",
            cta_button: "Scarica Report PDF Completo",
            cta_secure: "Consegna email immediata. 100% anonimo.",
            price_tag: "Tariffa una tantum: ",
            price_amount: "7.90",
            currency_symbol: "€",
            secure_delivery: "Consegna via email crittografata sicura",
            purchase_button: "Completa l'acquisto",
        },
        how_it_works: {
            title: "Come funziona",
            step1_title: "Inserisci Info",
            step1_desc: "Fornisci nome utente, email o telefono",
            step2_title: "Scansione Globale",
            step2_desc: "AI scansiona 50+ reti in tempo reale",
            step2_time: "~ 30 sec",
            step3_title: "Ricevi Rapporto",
            step3_desc: "Ottieni un rapporto PDF dettagliato istantaneamente",
            step3_time: "Istantaneo"
        },
        bento: {
            social_profiles: "Profili Social",
            location_data: "Dati di Posizione",
            status_updates: "Stato Attività",
            found: "Trovato",
            match: "Corrispondenza",
            active_now: "Attivo ora"
        },
        value_prop: {
            title: "Cosa ricevi?",
            subtitle: "Analisi completa delle impronte digitali",
            feat1_title: "Grafo Sociale",
            feat1_desc: "Connessioni tra account e amici.",
            feat2_title: "Geolocalizzazione",
            feat2_desc: "Mappa dei movimenti e luoghi frequenti.",
            feat3_title: "Foto Nascoste",
            feat3_desc: "Foto da profili privati.",
            feat4_title: "Storia IP",
            feat4_desc: "Lista indirizzi IP e dispositivi."
        }
    },
    es: {
        hero: {
            badge_enc: "Cifrado 256-bit",
            badge_anon: "100% Anónimo",
            badge_nologs: "Sin registros",
            system_status: "Sistema en línea • Base actualizada",
            title_start: "La verdad en",
            title_highlight: "60 segundos",
            subtitle: "Búsqueda OSINT profesional de huellas digitales",
            desc: "Analizamos rastros públicos de 120+ fuentes. Vea coincidencias al instante.",
            input_placeholder: "Email o teléfono (ej. +34...)",
            btn_start: "Comenzar",
            btn_scanning: "Escaneando...",
            error_msg: "Ingrese un email o teléfono válido",
            footer_note: "Gratis: lista de servicios. Informe PDF completo: enlaces, fechas."
        },
        steps: {
            s1_title: "Ingresar datos",
            s1_desc: "Ingrese email o teléfono. El sistema normaliza los datos.",
            s2_title: "Escanear registros",
            s2_desc: "El algoritmo verifica 120+ fuentes abiertas y filtraciones.",
            s3_title: "Generar informe",
            s3_desc: "Agregamos todos los rastros en un informe PDF único."
        },
        modal: {
            title: "Escaneando fuentes abiertas...",
            status_init: "Inicializando módulos OSINT...",
            status_processing: "PROCESANDO REPOSITORIOS",
            status_complete: "ANÁLISIS COMPLETADO",
            cancel: "Cancelar"
        },
        results: {
            badge_complete: "Análisis completado",
            title: "Rastros potenciales encontrados",
            subtitle: "Rastros encontrados en bases de datos. Informe completo incluye enlaces.",
            found_accounts: "Cuentas confirmadas",
            private_data: "Datos privados",
            hidden_details: "Detalles ocultos. Disponible en el informe completo.",
            cta_button: "Descargar Informe PDF",
            cta_secure: "Entrega inmediata por email. 100% anónimo.",
            price_tag: "Pago único: ",
            price_amount: "7.90",
            currency_symbol: "€",
            secure_delivery: "Entrega vía correo electrónico encriptado seguro",
            purchase_button: "Completar compra",
        },
        how_it_works: {
            title: "Cómo funciona",
            step1_title: "Ingresar Info",
            step1_desc: "Proporcionar nombre de usuario, email o teléfono",
            step2_title: "Escaneo Global",
            step2_desc: "IA escanea 50+ redes en tiempo real",
            step2_time: "~ 30 seg",
            step3_title: "Recibir Informe",
            step3_desc: "Obtenga un informe PDF detallado al instante",
            step3_time: "Instantáneo"
        },
        bento: {
            social_profiles: "Perfiles Sociales",
            location_data: "Datos de Ubicación",
            status_updates: "Estado de Actividad",
            found: "Encontrado",
            match: "Coincidencia",
            active_now: "Activo ahora"
        },
        value_prop: {
            title: "¿Qué obtienes?",
            subtitle: "Análisis completo de huellas digitales",
            feat1_title: "Gráfico Social",
            feat1_desc: "Conexiones entre cuentas y amigos.",
            feat2_title: "Geolocalización",
            feat2_desc: "Mapa de movimientos y lugares frecuentes.",
            feat3_title: "Fotos Ocultas",
            feat3_desc: "Fotos de perfiles privados.",
            feat4_title: "Historial IP",
            feat4_desc: "Lista de direcciones IP y dispositivos."
        }
    },
    ru: {
        hero: {
            badge_enc: "256-bit Шифрование",
            badge_anon: "100% Анонимно",
            badge_nologs: "Без логов",
            system_status: "Система онлайн • База обновлена",
            title_start: "Узнайте правду за",
            title_highlight: "60 секунд",
            subtitle: "Профессиональный OSINT-поиск по цифровым следам",
            desc: "Мы анализируем публично доступные цифровые следы из 120+ открытых источников.",
            input_placeholder: "Email или номер телефона (напр. +7999...)",
            btn_start: "Начать проверку",
            btn_scanning: "Сканирование...",
            error_msg: "Введите корректный email или номер телефона",
            footer_note: "Бесплатно: список найденных сервисов. Полный PDF-отчет: ссылки, датировки."
        },
        steps: {
            s1_title: "Ввод данных",
            s1_desc: "Вы вводите email или телефон. Система нормализует данные.",
            s2_title: "Сканирование реестров",
            s2_desc: "Алгоритм проверяет 120+ открытых источников и утечек.",
            s3_title: "Генерация отчета",
            s3_desc: "Мы собираем все найденные цифровые следы в единый PDF."
        },
        modal: {
            title: "Сканирование открытых источников...",
            status_init: "Инициализация модулей OSINT...",
            status_processing: "ОБРАБОТКА ИСТОЧНИКОВ",
            status_complete: "АНАЛИЗ ЗАВЕРШЕН",
            cancel: "Отмена"
        },
        results: {
            badge_complete: "Анализ завершен",
            title: "Потенциальные следы найдены",
            subtitle: "Бесплатно показываем факт наличия следов. Полный отчет включает ссылки.",
            found_accounts: "Подтвержденные аккаунты",
            private_data: "Приватные данные",
            hidden_details: "Детали скрыты. Доступно в полном отчете.",
            cta_button: "Скачать полный PDF отчет",
            cta_secure: "Мгновенная доставка на email. 100% анонимно.",
            price_tag: "Единоразовый платеж: ",
            price_amount: "790",
            currency_symbol: "₽",
            secure_delivery: "Доставка защищенным зашифрованным письмом",
            purchase_button: "Завершить покупку",
        },
        how_it_works: {
            title: "Как это работает",
            step1_title: "Введите данные",
            step1_desc: "Укажите никнейм, email или телефон",
            step2_title: "Глобальный поиск",
            step2_desc: "ИИ сканирует 50+ сетей в реальном времени",
            step2_time: "~ 30 сек",
            step3_title: "Получите отчет",
            step3_desc: "Подробный PDF-отчет мгновенно",
            step3_time: "Мгновенно"
        },
        bento: {
            social_profiles: "Соцсети",
            location_data: "Геолокация",
            status_updates: "Статус активности",
            found: "Найдено",
            match: "Совпадение",
            active_now: "В сети"
        },
        value_prop: {
            title: "Что вы получите в отчете?",
            subtitle: "Полная картина цифровой жизни в одном документе",
            feat1_title: "Социальный граф",
            feat1_desc: "Связи между аккаунтами, друзьями и колегами.",
            feat2_title: "Геолокация",
            feat2_desc: "Карта перемещений и часто посещаемых мест.",
            feat3_title: "Скрытые фото",
            feat3_desc: "Фотографии из закрытых профилей и архивов.",
            feat4_title: "История IP",
            feat4_desc: "Список IP-адресов и устройств входа."
        }
    }
};
