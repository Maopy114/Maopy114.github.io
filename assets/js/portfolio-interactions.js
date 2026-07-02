(function () {
  "use strict";

  var networkEdges = [
    ["mao", "ai"],
    ["mao", "data"],
    ["mao", "communication"],
    ["mao", "systems"],
    ["mao", "projects"],
    ["mao", "unity"],
    ["mao", "blog"],
    ["mao", "goals"],
    ["ai", "data"],
    ["ai", "systems"],
    ["data", "communication"],
    ["data", "projects"],
    ["communication", "blog"],
    ["systems", "projects"],
    ["systems", "goals"],
    ["unity", "projects"],
    ["blog", "goals"]
  ];

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function setText(element, text) {
    if (element) {
      element.textContent = text;
    }
  }

  function initNetwork() {
    var panel = document.querySelector("[data-portfolio-network]");
    if (!panel) {
      return;
    }

    var graph = panel.querySelector(".portfolio-network");
    var svg = panel.querySelector(".portfolio-network__lines");
    var nodes = Array.prototype.slice.call(panel.querySelectorAll(".portfolio-network__node"));
    var title = panel.querySelector("[data-network-title]");
    var description = panel.querySelector("[data-network-description]");
    var activeId = "mao";

    function nodeById(id) {
      return nodes.find(function (node) {
        return node.dataset.node === id;
      });
    }

    function isNeighbor(id, target) {
      return networkEdges.some(function (edge) {
        return edge.indexOf(id) !== -1 && edge.indexOf(target) !== -1;
      });
    }

    function drawEdges() {
      var graphRect = graph.getBoundingClientRect();
      svg.setAttribute("viewBox", "0 0 " + graphRect.width + " " + graphRect.height);
      svg.replaceChildren();

      networkEdges.forEach(function (edge) {
        var start = nodeById(edge[0]);
        var end = nodeById(edge[1]);
        if (!start || !end) {
          return;
        }

        var startRect = start.getBoundingClientRect();
        var endRect = end.getBoundingClientRect();
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        line.setAttribute("x1", startRect.left + startRect.width / 2 - graphRect.left);
        line.setAttribute("y1", startRect.top + startRect.height / 2 - graphRect.top);
        line.setAttribute("x2", endRect.left + endRect.width / 2 - graphRect.left);
        line.setAttribute("y2", endRect.top + endRect.height / 2 - graphRect.top);
        line.dataset.edge = edge.join(" ");
        svg.appendChild(line);
      });

      highlight(activeId);
    }

    function highlight(id) {
      var current = nodeById(id);
      if (!current) {
        return;
      }

      activeId = id;
      nodes.forEach(function (node) {
        var currentId = node.dataset.node;
        node.classList.toggle("is-active", currentId === id);
        node.classList.toggle("is-neighbor", isNeighbor(currentId, id));
      });

      Array.prototype.slice.call(svg.querySelectorAll("line")).forEach(function (line) {
        var parts = line.dataset.edge.split(" ");
        line.classList.toggle("is-active", parts.indexOf(id) !== -1);
      });

      setText(title, current.dataset.title);
      setText(description, current.dataset.description);
    }

    nodes.forEach(function (node) {
      var id = node.dataset.node;
      node.addEventListener("mouseenter", function () {
        highlight(id);
      });
      node.addEventListener("focus", function () {
        highlight(id);
      });
      node.addEventListener("click", function () {
        highlight(id);
      });
    });

    if ("ResizeObserver" in window) {
      new ResizeObserver(drawEdges).observe(graph);
    } else {
      window.addEventListener("resize", drawEdges);
    }

    window.requestAnimationFrame(drawEdges);
  }

  function initGoalTimeline() {
    var timeline = document.querySelector("[data-goal-timeline]");
    if (!timeline) {
      return;
    }

    var steps = Array.prototype.slice.call(timeline.querySelectorAll("[data-goal-target]"));
    var panels = Array.prototype.slice.call(timeline.querySelectorAll("[data-goal-panel]"));

    function activate(target) {
      steps.forEach(function (step) {
        var selected = step.dataset.goalTarget === target;
        step.classList.toggle("is-active", selected);
        step.setAttribute("aria-selected", selected ? "true" : "false");
      });

      panels.forEach(function (panel) {
        panel.classList.toggle("is-active", panel.dataset.goalPanel === target);
      });
    }

    steps.forEach(function (step) {
      step.addEventListener("mouseenter", function () {
        activate(step.dataset.goalTarget);
      });
      step.addEventListener("focus", function () {
        activate(step.dataset.goalTarget);
      });
      step.addEventListener("click", function () {
        activate(step.dataset.goalTarget);
      });
    });
  }

  function initProjectFlows() {
    var flows = Array.prototype.slice.call(document.querySelectorAll("[data-project-flow]"));
    flows.forEach(function (flow) {
      var note = flow.querySelector("[data-flow-note]");
      var buttons = Array.prototype.slice.call(flow.querySelectorAll("[data-flow-detail]"));

      function activate(button) {
        buttons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        setText(note, button.dataset.flowDetail);
      }

      buttons.forEach(function (button) {
        button.addEventListener("mouseenter", function () {
          activate(button);
        });
        button.addEventListener("focus", function () {
          activate(button);
        });
        button.addEventListener("click", function () {
          activate(button);
        });
      });

      if (buttons[0]) {
        activate(buttons[0]);
      }
    });
  }

  ready(function () {
    document.documentElement.classList.add("portfolio-js-ready");
    initNetwork();
    initGoalTimeline();
    initProjectFlows();
  });
})();
