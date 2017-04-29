// Generated by CoffeeScript 1.12.5

/*$ ->
	xhr = new XMLHttpRequest()
	xhr.onreadystatechange = ->
		if xhr.readyState is 4
			agents = JSON.parse xhr.responseText
			widgetHTML = '<ul class="bulleted">'
			for agent in agents
				if agent.online
					liClass = 'in'
				else
					liClass = 'out'

				widgetHTML = "#{widgetHTML} <li class=\"#{liClass}\">#{agent.name}</li>"
			widgetHTML = "#{widgetHTML}</ul>"
			$('#employeeList').html widgetHTML

	xhr.open 'GET', 'data/agents.json'
	xhr.send()
 */

(function() {
  $(function() {
    return $.getJSON('data/agents.json', function(response) {
      var agent, i, len, liClass, widgetHTML;
      widgetHTML = '<ul class="bulleted">';
      for (i = 0, len = response.length; i < len; i++) {
        agent = response[i];
        if (agent.online) {
          liClass = 'in';
        } else {
          liClass = 'out';
        }
        widgetHTML = widgetHTML + " <li class=\"" + liClass + "\">" + agent.name + "</li>";
      }
      widgetHTML = widgetHTML + "</ul>";
      return $('#employeeList').html(widgetHTML);
    });
  });

}).call(this);
