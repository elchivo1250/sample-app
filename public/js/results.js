var Sumo = function () {};

Sumo.prepareData = function (answerData) {
  var data = {};
  var key;
  var questionKey;
  var answerKey;

  for (key in answerData) {
    if (!answerData.hasOwnProperty(key)) {
      continue;
    }

    questionKey = 'question-' + answerData[key].Answer.QuestionId;
    answerKey = 'answer-' + answerData[key].Answer.id;

    if (!data.hasOwnProperty(questionKey)) {
      data[questionKey] = {
        text: answerData[key].Answer.Question.text
      };
    }

    data[questionKey][answerKey] = {
      label: answerData[key].Answer.text,
      value: answerData[key].answerCount
    };
  }

  return data;
};

Sumo.plot = function (questionId, answerData) {
  var data = [];
  var width = 300;
  var height = 300;
  var radius = Math.min(width, height) / 2;
  var color = d3.scale.category20();

  var item;

  var vis;
  var arc;
  var pie;
  var arcs;

  for (item in answerData) {
    if (item === 'text') {
      continue;
    }

    data.push({
      label: answerData[item].label,
      value: answerData[item].value
    });
  }

  console.log(data);

  $('div.results-container').append('<div ' +
      'id="' + questionId + '" >' +
      '<h3>' + answerData.text + '</h3>' +
      '<div class="chart" ></div>' +
      '</div>');

  vis = d3.select('div#' + questionId + ' div.chart')
        .append('svg:svg')
        .data([data])
        .attr('width', width)
        .attr('height', height)
        .append('svg:g')
        .attr('transform', 'translate(' + radius + ',' + radius + ')');

  arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(0.5 * radius);

  pie = d3.layout.pie()
        .value(function (d) { return d.value; })
        .sort(function () { return null; });

  arcs = vis.selectAll('g.slice')
          .data(pie)
          .enter()
          .append('svg:g')
          .attr('class', 'slice');

  arcs.append('svg:path')
    .attr('fill', function (d, i) { return color(i); })
    .attr('d', arc);

  arcs.append('svg:text')
    .attr('transform', function (d) {
      var dataObj = d;
      dataObj.outerRadius = radius * 1.2;
      dataObj.innerRadius = radius + 1.1;
      return 'translate(' + arc.centroid(dataObj) + ')';
    })
    .attr('text-anchor', 'middle')
    .style('fill', 'White')
    .style('font', 'bold 12px Arial')
    .text(function (d, i) {
      return data[i].label;
    });

  arcs.filter(function (d) {
    return d.endAngle - d.startAngle > 0.2;
  })
  .append('svg:text')
  .attr('dy', '.35em')
  .attr('text-anchor', 'middle')
  .attr('transform', function (d) {
    var dataObj = d;
    dataObj.outerRadius = radius;
    dataObj.innerRadius = radius / 2;
    return 'translate(' + arc.centroid(dataObj) + ')rotate(' + Sumo.angle(dataObj) + ')';
  })
  .style('fill', 'White')
  .style('font', 'bold 12px Arial');
};

Sumo.plotAll = function (answerData) {
  var data = Sumo.prepareData(answerData);
  var item;

  for (item in data) {
    if (data.hasOwnProperty(item)) {
      Sumo.plot(item, data[item]);
    }
  }
};

Sumo.angle = function (d) {
  var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
  return a > 90 ? a - 180 : a;
};
