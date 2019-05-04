import { Component, OnInit, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from "@angular/core";
import * as d3 from "d3";

export interface IDataModel {
  subject: string;
  averageMark: number;
}

export interface IMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

@Component({
  selector: "app-bar-chart",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnChanges {
  @ViewChild("chart")
  private chartContainer: ElementRef;

  @Input()
  public data: IDataModel[];

  public margin: IMargin = {top: 20, right: 20, bottom: 40, left: 40};

  private createChart(): void {
    d3.select("svg").remove();

    const element: HTMLElement = this.chartContainer.nativeElement;
    const data = this.data;

    const svg: d3.Selection<SVGSVGElement, {}, null, undefined> = d3.select(element).append("svg")
        .attr("width", element.offsetWidth)
        .attr("height", 350);

    const contentWidth: number = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight: number = element.offsetHeight - this.margin.top - this.margin.bottom;

    const x: d3.ScaleBand<string> = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.5)
      .domain(data.map(d => d.subject));

    const y: d3.ScaleLinear<number, number> = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, 10]);

    const g: d3.Selection<SVGGElement, {}, null, undefined> = svg.append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + contentHeight + ")")
      .call(d3.axisBottom(x));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(20, ""))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("font-size", "1rem")
        .attr("text-anchor", "end")
        .attr("fill", "white")
        .text("Average Mark");

    let bar: d3.Selection<SVGGElement, IDataModel, SVGGElement, {}> = g.selectAll(".bar")
      .data(data)
      .enter().append("g");

    bar.append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.subject))
      .attr("y", d => y(d.averageMark))
      .attr("width", x.bandwidth())
      .attr("height", d => contentHeight - y(d.averageMark));

    bar.append("text")
      .text(d => d.averageMark)
      .attr("x", d => x(d.subject) + x.bandwidth() / 2 - 12)
      .attr("y", d => y(d.averageMark) + 30)
      .attr("font-weight", "bold");

  }

  public ngOnChanges(): void {
    if (!this.data) { return; }

    this.createChart();
  }

  public onResize(): void {
    this.createChart();
  }
}
