document.getElementById("fillForm").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillForm
  });
});

function fillForm() {
  const data = {
    name: "Karthik Murali",
    email: "karthik@example.com",
    phone: "9876543210"
  };

  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    const type = input.type.toLowerCase();

    if (type === "text" && input.name.toLowerCase().includes("name")) {
      input.value = data.name;
    } else if (type === "email") {
      input.value = data.email;
    } else if (type === "tel" || input.name.toLowerCase().includes("phone")) {
      input.value = data.phone;
    }
  });
}
