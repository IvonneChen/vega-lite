"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("../../channel");
var datetime_1 = require("../../datetime");
var fielddef_1 = require("../../fielddef");
var type_1 = require("../../type");
var util_1 = require("../../util");
function title(legend, fieldDef, config) {
    if (legend.title !== undefined) {
        return legend.title;
    }
    return fielddef_1.title(fieldDef, config);
}
exports.title = title;
function values(legend) {
    var vals = legend.values;
    if (vals && datetime_1.isDateTime(vals[0])) {
        return vals.map(function (dt) {
            // normalize = true as end user won't put 0 = January
            return datetime_1.timestamp(dt, true);
        });
    }
    return vals;
}
exports.values = values;
function type(legend, fieldDef, channel) {
    if (legend.type) {
        return legend.type;
    }
    if (channel === channel_1.COLOR && !fieldDef.bin && !fieldDef.timeUnit && util_1.contains([type_1.QUANTITATIVE, type_1.TEMPORAL], fieldDef.type)) {
        return 'gradient';
    }
    return undefined;
}
exports.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcGlsZS9sZWdlbmQvcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNkM7QUFFN0MsMkNBQStEO0FBRy9ELDJDQUFtRDtBQUNuRCxtQ0FBa0Q7QUFDbEQsbUNBQW9DO0FBRXBDLGVBQXNCLE1BQWMsRUFBRSxRQUFrQixFQUFFLE1BQWM7SUFDdEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQU5ELHNCQU1DO0FBRUQsZ0JBQXVCLE1BQWM7SUFDbkMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUkscUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFFLElBQW1CLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBRTtZQUNqQyxxREFBcUQ7WUFDckQsTUFBTSxDQUFDLG9CQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBVEQsd0JBU0M7QUFFRCxjQUFxQixNQUFjLEVBQUUsUUFBa0IsRUFBRSxPQUFnQjtJQUN2RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLGVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLGVBQVEsQ0FBQyxDQUFDLG1CQUFZLEVBQUUsZUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsSCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFURCxvQkFTQyJ9