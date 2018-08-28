function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementById("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe(){
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipeTemplate").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}




function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
