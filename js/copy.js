var selectTextOf = function(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

var copy = function(element){
    selectTextOf(element);
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'Copied!' : 'Not Copied!';
        console.info(msg);
      } catch (err) {
        console.error('Oops, unable to copy!');
      }
    if (window.getSelection)
    window.getSelection().removeAllRanges();
}