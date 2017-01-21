const config = {
  version: 'V1',
  build_version: '01212',
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/freeiot-api'
  },
  mqtt: {
    port: 1883,
    backend: {
      // using ascoltatore
      type: 'mongo',
      url: process.env.MQTT_DB_URI || 'mongodb://localhost/mqtt',
      pubsubCollection: 'ascoltatori',
      mongo: {}
    }
  },
  key: {
    jwt: '1e6f17cab92bd24568150e0afba21cf2',
    pass: '89c3e1db9f5e0cb4b2b4c3fe00f0f13a'
  }
}

module.exports = config
