<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{title}}</title>
  <style>
  a{
  display:block;
  color:green;
  }
  </style>
</head>
<body>
{{#each files}}
<a href='{{../dir}}/{{file}}'>【{{icon}}】{{file}}</a>
{{/each}}
</body>
</html>
