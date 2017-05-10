const expand_headers = document.getElementsByClassName('expand_header');

for (let i = 0; i < expand_headers.length; i++)
{
  expand_headers[i].addEventListener("click", (e) => {
    let content = expand_getClosestChild(expand_getClosestAncestor(e.target, 'expand_container'), 'expand_content');
    expand_toggle_visibility(content);
  });
}

function expand_toggle_visibility(element) {
  if (element.classList.contains('expand_open'))
  {
    expand_slideUp(element);
  }
  else
  {
    let open_elements = document.getElementsByClassName('expand_open');
    if (open_elements.length > 0) { expand_slideUp(open_elements[0]); }
    setTimeout( () => { expand_slideDown(element); }, 250 );
  }
  console.log(element);
}

function expand_slideDown(element) {
  element.classList.add('expand_open');
}

function expand_slideUp(element) {
  element.classList.remove('expand_open');
}

function expand_getClosestAncestor(element, className) {
  let is_found = false;
  let parent = element.parentNode;

  if (!parent)
  {
    console.log(`${element} does not have an ancestor with class name ${className}.`);
    return null;
  }

  if (parent.classList.contains(className))
  { 
    is_found = true;
  }

  if (is_found)
  { 
    return parent;
  }
  else
  { 
    return getClosestAncestor(parent, className);
  }
}

function expand_getClosestChild(element, className) {
  let is_found = false;
  let children = element.children;
  let child;

  if (!children)
  {
    console.log(`${element} does not have any children with class name ${className}.`);
    return null;
  }

  for (let i = 0; !is_found && i < children.length; i++)
  {
    child = children[i];
    if (child.classList.contains(className))
    { 
      is_found = true;
    }

  }

  if (is_found)
  {
    return child;
  }

  else
  {
    for (let i = 0; !is_found && i < children.length; i++)
    {
      child = getClosestChild(children[i], className);
    }
  }

  return child;
}
