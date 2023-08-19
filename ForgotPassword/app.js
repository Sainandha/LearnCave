function Email()
{
    var textField = document.createElement("input");
    textField.type = "text";
    textField.value = item.innerText;
  
    // Replace the item with the new input element
    item.parentNode.replaceChild(textField, item);
  
    // Focus on the new text field
    textField.focus();
}