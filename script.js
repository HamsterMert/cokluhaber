function toggleVideo(button) {
    // İlgili video iframe'ini al
    const iframe = button.previousElementSibling;

    // Videonun src'sini al ve sesini aç
    let src = iframe.src;
    if (src.includes("mute=1")) {
        iframe.src = src.replace("&mute=1", "&mute=0");
    }

    // Videonun boyutunu yatay olarak büyüt
    iframe.style.width = "100%";  // Genişlik %100
    iframe.style.height = "450px"; // Yüksekliği sabit

    // Butonun görünümünü değiştirebiliriz
    button.style.display = "none"; // Butonu gizlemek
}
