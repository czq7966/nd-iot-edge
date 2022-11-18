let mqtt = require("mqtt");
let subscribe = mqtt.MqttClient.prototype.subscribe;
mqtt.MqttClient.prototype.subscribe  = function(topic, opts, callback) {
    if (opts)   
        opts.qos = 0;
    return subscribe.call(this, topic, opts, callback);
} ;

process.env.TZ = "Asia/Shanghai"
require("./src/index.js")
