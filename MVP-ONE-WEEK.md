# DeinBasar – 7-Tage-MVP-Plan

Ziel: Eine kontrollierte öffentliche Beta mit dem virtuellen 2D-Basar als primärer Erfahrung.

## MVP-Scope
- 2D-Basar als Haupteinstieg: Marktviertel, Standplätze, Navigation, Suche und Sprung auf Karte.
- Private Einzelanzeigen ohne Stand im Einzelmarkt.
- Private Stände und gewerbliche Händler-Shops.
- Einfacher Shop-Editor: Logo, Farbe, Beschreibung, Artikelzuordnung.
- Käuferkontakt über DeinBasar-Chat.
- Unverbindliche Kaufanfrage, Reservierung, Abholung/Barzahlung, Abschluss, Bewertung.
- Melden, Blockieren, Spam-/Betrugswarnungen und Moderations-Holds.
- Händler- und Produkt-Compliance-Gates vor öffentlicher Sichtbarkeit.
- Kein integrierter Zahlungs-/Treuhanddienst im MVP.

## Release-Gates
1. Kein kritischer Rechte-/RLS-Fehler.
2. Käufer kann keinen fremden Verkäufer/Shop fälschen oder fremde Daten ändern.
3. Verdeckte/ungeprüfte Händlerangebote sind öffentlich nicht erreichbar.
4. Betrugs-Spam wird serverseitig begrenzt; Links/Zahlungs-/Credential-Risiken werden markiert.
5. Käufer → Anfrage → Reservierung → Übergabe → Abschluss funktioniert vollständig.
6. Mobile Hauptflows auf Android funktionieren ohne horizontales Layoutbrechen.
7. 2D-Basar ist Standardansicht und neue Stände/Einzelanzeigen erhalten automatisch Positionen.
8. Betreiber-Impressum, Datenschutz, Marktplatzbedingungen und reale Kontakt-/Meldewege sind vor Public Beta final befüllt.
9. Ein operativer Admin/Moderator ist bestimmt und Händlerprüfungen können tatsächlich bearbeitet werden.
10. Mindestens 10–20 reale oder klar gekennzeichnete Testangebote für einen glaubwürdigen Beta-Start.

## Tag 1 – Kern & 2D-Basar
- [x] 2D-Basar technisch vorhanden
- [x] 2D-Basar zur primären Ansicht gemacht
- [x] Automatische Standplatzvergabe für Shops vorhanden
- [x] Einzelmarkt-Positionierung für Anzeigen vorhanden
- [ ] Mobile Navigation final auf mehreren Displaybreiten prüfen
- [ ] Leerzustände und Onboarding aus Karte optimieren

## Tag 2 – Käuferflow
- [x] Anzeige → Chat
- [x] Shop → allgemeine oder produktbezogene Nachricht
- [x] Bildbetrachter
- [x] Anfrage/Preisvorschlag
- [x] Reservierung
- [x] Abschluss durch Käufer + Verkäufer
- [x] Bewertung nach Abschluss
- [ ] Problem-/Abbruchtexte und Edge Cases visuell finalisieren

## Tag 3 – Verkäufer & Händler
- [x] Private Anzeige
- [x] Privater Stand
- [x] Gewerblicher Händler-Shop
- [x] Shop-Gestaltung ohne 3D-Builder
- [x] Händlerangaben/Produktinformationen
- [x] ungeprüfte Händler bleiben öffentlich gesperrt
- [x] Admin-Prozess für Händlerprüfung technisch vorhanden
- [ ] Admin-Konto für Händlerprüfung freischalten

## Tag 4 – Trust & Safety
- [x] Blockieren/Melden
- [x] Rechtswidrige Inhalte melden
- [x] Nachrichten-Risikoerkennung
- [x] Spam-/Kontakt-Rate-Limits
- [x] Massen-Nachrichten-Sperre
- [x] Listing-Moderations-Holds
- [x] Einspruchsweg
- [x] Moderator-Oberfläche / operative Bearbeitung
- [ ] Admin-Konto für Moderation freischalten

## Tag 5 – Recht & Datenschutz
- [x] Private Kontaktdaten von öffentlichen Händlerdaten getrennt
- [x] Verkäuferstatus sichtbar
- [x] Marktplatzregeln und Sicherheitsseite
- [ ] Betreiber-Impressum mit echten Betreiberangaben
- [ ] Datenschutzerklärung für den tatsächlichen Betrieb
- [ ] endgültige Nutzungs-/Marktplatzbedingungen
- [ ] Lösch-/Auskunftsprozess und Aufbewahrungsfristen dokumentieren
- [ ] juristische Endprüfung vor öffentlichem Launch

## Tag 6 – QA & Release
- [ ] Zwei echte Testkonten komplett durchspielen
- [ ] Händler-Onboarding bis Freischaltung testen
- [ ] Mobile Android QA
- [ ] Cache/Service Worker/404/Auth-Redirect prüfen
- [ ] Fehlertexte und leere Zustände prüfen

## Tag 7 – Beta-Launch
- [ ] Pilotinhalte/Pilothändler einpflegen
- [ ] finale Release-Gates abhaken
- [ ] kontrollierte Beta statt Voll-Launch
- [ ] Monitoring für Fehler, Meldungen und Händlerprüfung

## Aktueller Stand
Technisch liegt DeinBasar bereits deutlich über einem einfachen Click-Dummy: Auth, Datenbank, RLS, Anzeigen, Shops, 2D-Basar, Chat, Kaufanfragen, Reservierung, Abschluss, Ratings, Meldungen und Sicherheitsregeln sind vorhanden. Die größten verbleibenden Launch-Blocker sind operative Moderation/Händlerprüfung, finale Rechtstexte mit echten Betreiberangaben und ein vollständiger Mobile-/Zwei-Konten-E2E-Test.
