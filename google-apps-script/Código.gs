/**
 * ─────────────────────────────────────────────────────────
 * Google Apps Script — Backend gratuito para el formulario
 * ─────────────────────────────────────────────────────────
 *
 * INSTRUCCIONES PASO A PASO:
 *
 * 1. Ve a sheets.google.com y crea una nueva hoja de cálculo.
 *    Nómbrala "Solicitudes Conductor Bogotá".
 *
 * 2. Agrega estos encabezados en la fila 1 (A1:I1):
 *    Timestamp | Nombre | Teléfono | Servicio | Fecha | Hora | Mensaje | Fuente | Estado
 *
 * 3. En el menú de Google Sheets: Extensiones → Apps Script
 *    Se abre el editor de código.
 *
 * 4. Borra el código que aparece y pega este archivo completo.
 *
 * 5. Reemplaza REEMPLAZA_CON_ID_DE_TU_HOJA con el ID de tu hoja.
 *    El ID está en la URL: docs.google.com/spreadsheets/d/[ID]/edit
 *
 * 6. Guarda el proyecto (Ctrl+S).
 *
 * 7. En el menú del editor: Implementar → Nueva implementación
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta de Google)
 *    - Quién puede acceder: Cualquier persona
 *    → Haz clic en "Implementar"
 *    → Copia la URL que aparece (algo como script.google.com/macros/s/ABC.../exec)
 *
 * 8. Pega esa URL en ContactForm.astro donde dice REEMPLAZA_CON_TU_URL
 *    (línea 14 y la del script al final del componente).
 *
 * ¡Listo! Cada vez que alguien llene el formulario, los datos
 * aparecerán automáticamente en tu Google Sheet.
 * ─────────────────────────────────────────────────────────
 */

// ID de tu Google Sheet (cámbialo por el tuyo)
const SPREADSHEET_ID = "REEMPLAZA_CON_ID_DE_TU_HOJA";
const SHEET_NAME = "Solicitudes";

// Email para recibir notificaciones (tu correo de Gmail)
const NOTIFICATION_EMAIL = "tu-correo@gmail.com";

/**
 * doPost: Se ejecuta cuando el formulario hace un POST.
 * Esta función es el "endpoint" de tu API gratuita.
 */
function doPost(e) {
  try {
    // Abrir la hoja de cálculo
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Si la hoja "Solicitudes" no existe, crearla con encabezados
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Nombre",
        "Teléfono",
        "Servicio",
        "Fecha del Servicio",
        "Hora",
        "Mensaje",
        "Fuente",
        "Estado"
      ]);
      // Formato de encabezados
      const headerRow = sheet.getRange(1, 1, 1, 9);
      headerRow.setBackground("#1a56db");
      headerRow.setFontColor("white");
      headerRow.setFontWeight("bold");
    }

    // Extraer datos del formulario
    const params = e.parameter;

    // Validación básica anti-spam
    if (params["_honeypot"] && params["_honeypot"].trim() !== "") {
      return ContentService
        .createTextOutput(JSON.stringify({ result: "ignored" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Escribir fila en la hoja
    sheet.appendRow([
      params.timestamp || new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" }),
      params.nombre || "",
      params.telefono || "",
      params.servicio || "",
      params.fecha || "",
      params.hora || "",
      params.mensaje || "",
      params.fuente || "Formulario web",
      "Nuevo",  // Estado inicial
    ]);

    // Resaltar la nueva fila como "nueva solicitud"
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 9).setBackground("#d4edda"); // Verde suave en "Estado"

    // Enviar notificación por email (opcional)
    enviarNotificacion(params);

    // Respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log del error para debugging
    console.error("Error en doPost:", error.toString());

    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Envía un email de notificación cuando llega una solicitud nueva.
 * Funciona con Gmail gratuito — hasta 100 emails/día.
 */
function enviarNotificacion(params) {
  try {
    const asunto = `🚗 Nueva solicitud de conductor: ${params.nombre || "Desconocido"}`;
    const cuerpo = `
Nueva solicitud recibida en Conductor Bogotá:

👤 Nombre:    ${params.nombre || "-"}
📱 Teléfono:  ${params.telefono || "-"}
🚗 Servicio:  ${params.servicio || "-"}
📅 Fecha:     ${params.fecha || "-"}
🕐 Hora:      ${params.hora || "-"}
💬 Mensaje:   ${params.mensaje || "-"}
🕒 Recibido:  ${params.timestamp || new Date().toLocaleString("es-CO")}

---
Responde directamente a esta solicitud vía WhatsApp:
https://wa.me/${(params.telefono || "").replace(/\D/g, "")}
    `;

    GmailApp.sendEmail(NOTIFICATION_EMAIL, asunto, cuerpo);
  } catch (emailError) {
    // Si el email falla, no rompemos el flujo principal
    console.warn("No se pudo enviar notificación:", emailError.toString());
  }
}

/**
 * doGet: Requerido para que la URL de implementación funcione.
 * También sirve para verificar que el script está activo.
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Conductor Bogotá - API activa",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
