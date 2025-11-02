import React from 'react';

const IoTSmartDevicesSection = () => {
  return (
    <section id="iot-smart-devices-wearables" className="scroll-mt-24 max-w-[800px]">
      <h2 className="mt-12 mb-6 text-[36px] font-bold text-[#1a1f36]">
        Section 15: IoT, Smart Devices, and Wearable Technology
      </h2>
      
      <h3 className="mt-8 mb-4 text-[28px] font-semibold text-[#1a1f36]">
        15.1 Internet of Things (IoT) Data Collection and Processing
      </h3>
      
      <p className="mb-6 text-base font-normal text-[#4a5568] leading-[1.6]">
        When you use our Services through IoT devices, smart devices, wearables, or other connected hardware, we collect and process unique categories of Personal Data subject to enhanced privacy protections given the intimate and continuous nature of IoT data collection.
      </p>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        a. Types of IoT and Smart Device Data Collected
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We may collect the following categories of data from connected devices:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Point-of-Sale Devices:</strong> Payment terminal identifiers, device location, transaction logs, peripheral connections, firmware versions, security event logs, and operational status from our payment terminals and card readers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Mobile Payment Devices:</strong> Mobile POS data including device type (iOS, Android), GPS coordinates, accelerometer data, proximity sensor data, NFC tap patterns, and Bluetooth beacon interactions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Wearable Payment Devices:</strong> Smartwatch payment data, fitness tracker transaction history, contactless ring payments, and biometric authentication data from wearable payment devices.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Smart Home Integration:</strong> Voice assistant transaction data (Alexa, Google Assistant), smart speaker payment commands, and home automation system financial integrations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Connected Vehicle Data:</strong> In-car payment system data, connected car commerce transactions, vehicle identification numbers (VIN), GPS routes to payment locations, and automotive telematics associated with payment events.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Industrial IoT (IIoT):</strong> Connected industrial equipment transaction data, machine-to-machine payment systems, supply chain sensor data, and automated inventory replenishment transactions.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Health and Fitness Wearables:</strong> Health-related payment data when using medical wearables, fitness subscriptions, health insurance integrations, and wellness program transaction data.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Smart Retail:</strong> Interactive kiosk data, digital signage interactions, electronic shelf label engagement, smart shopping cart data, and cashierless store transaction data.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        b. Device Identifiers and Fingerprinting
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        IoT devices generate unique identifiers used for authentication, fraud prevention, and service delivery:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Hardware Identifiers:</strong> Device serial numbers, MAC addresses, IMEI/MEID numbers, chip IDs, secure element identifiers, and Trusted Platform Module (TPM) attestations.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Software Identifiers:</strong> Device operating system, firmware version, installed app versions, SDK versions, and software configuration fingerprints.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Network Identifiers:</strong> IP addresses, Wi-Fi SSID/BSSID, cellular tower IDs, Bluetooth device names, NFC UIDs, and network topology mapping.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Environmental Fingerprints:</strong> Ambient sensor readings (temperature, pressure, humidity, light levels) creating unique device environment signatures for fraud detection.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Device Telemetry:</strong> Battery level, storage capacity, CPU usage, memory utilization, sensor calibration data, and device health metrics.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        c. Location Data from Connected Devices
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        IoT devices provide granular location data requiring enhanced privacy protections:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Precise Geolocation:</strong> GPS coordinates accurate to meters, used for merchant location verification, fraud detection (impossible travel), and location-based services with explicit opt-in consent.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Location History:</strong> Historical location patterns, frequent locations, geofencing events, dwell time analysis, and movement patterns creating detailed behavioral profiles.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Indoor Positioning:</strong> Wi-Fi triangulation, Bluetooth beacon proximity, ultra-wideband (UWB) positioning, and indoor navigation data revealing precise in-store movements.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Cross-Device Location Correlation:</strong> Location data aggregated across multiple IoT devices (phone, watch, car) creating comprehensive mobility profiles.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Sensitive Location Inference:</strong> Automated detection and special handling of visits to sensitive locations (medical facilities, religious sites, political venues, adult establishments) with enhanced privacy protections.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        d. Sensor Data and Environmental Context
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Connected devices collect rich sensor data providing contextual information:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Motion and Orientation:</strong> Accelerometer, gyroscope, and magnetometer data revealing device handling patterns, user gait characteristics, and activity classification (walking, driving, stationary).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Ambient Sensors:</strong> Light sensors, proximity sensors, barometer, thermometer, and hygrometer readings providing environmental context and device usage patterns.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Biometric Sensors:</strong> Heart rate, blood oxygen (SpO2), skin conductance, body temperature, and other health metrics from wearables used for authentication or fraud detection.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Audio Sensors:</strong> Microphone usage logs, ambient noise levels, voice command detection (not audio content without explicit consent), and ultrasonic beacon detection.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Camera Sensors:</strong> Camera activation logs, QR code scanning events, augmented reality interactions, and visual search queries (image content processed locally when possible).
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        e. Device Security and Attestation
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We verify device security posture to protect your data and prevent fraud:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Device Integrity Verification:</strong> SafetyNet attestation (Android), DeviceCheck (iOS), and custom attestation protocols verifying devices are unmodified and not rooted/jailbroken.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Secure Boot Verification:</strong> Verification of secure boot status, bootloader lock state, and signed firmware ensuring device has not been tampered with.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Runtime Security Checks:</strong> Detection of debugging tools, emulators, screen recording, accessibility service abuse, and other security threats in real-time.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Secure Element Usage:</strong> Verification of secure element (SE) or trusted execution environment (TEE) usage for cryptographic operations and sensitive data storage.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Certificate Pinning:</strong> Enforcement of certificate pinning on IoT devices to prevent man-in-the-middle attacks with logging of pinning violations.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        f. Edge Computing and On-Device Processing
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        We prioritize edge computing and on-device processing to enhance privacy:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Local Processing:</strong> Biometric authentication, fraud scoring, and personalization performed locally on device when feasible, minimizing data transmission to cloud servers.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Federated Learning:</strong> Machine learning model training distributed across IoT devices without centralizing raw data, preserving privacy while improving service quality.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Differential Privacy:</strong> When device data must be aggregated, differential privacy techniques add mathematical noise ensuring individual device data cannot be identified.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Minimization:</strong> IoT devices only transmit minimum necessary data to cloud servers, with local preprocessing, filtering, and aggregation reducing data volume and exposure.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Edge Caching:</strong> Frequently used data cached locally on devices reducing server queries and associated data transmission.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        g. Device-to-Device Communication and Mesh Networks
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When devices communicate directly with each other:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Peer-to-Peer Transactions:</strong> Direct device-to-device payment data exchange using Bluetooth, NFC, or Wi-Fi Direct with end-to-end encryption and authentication.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Mesh Network Participation:</strong> Participation in IoT mesh networks (Thread, Zigbee) with privacy-preserving routing protocols and encrypted mesh traffic.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Matter Protocol:</strong> Support for Matter smart home standard with local control, minimal cloud dependency, and privacy-by-design principles.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Device Pairing Data:</strong> Bluetooth pairing records, device discovery logs, and persistent connection preferences managed securely with encryption.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        h. Firmware Updates and Remote Device Management
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        Device management and updates with privacy protections:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Over-the-Air (OTA) Updates:</strong> Encrypted firmware updates with signed packages, rollback capabilities, and update history logs accessible to device owners.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Remote Configuration:</strong> Remote device configuration changes require user authorization for privacy-impacting settings (location services, sensor access, data sharing).
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Remote Diagnostics:</strong> Remote device diagnostic data collection with explicit opt-in consent, temporary access grants, and audit trails.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Device Decommissioning:</strong> Secure data wiping protocols for device end-of-life, return, or resale ensuring Personal Data is irrecoverably deleted.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        i. Third-Party IoT Ecosystems and Integrations
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        When integrating with third-party IoT platforms:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Smart Home Platform Integration:</strong> Integration with Apple HomeKit, Google Home, Amazon Alexa, Samsung SmartThings subject to platform-specific privacy policies and data sharing agreements.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Health Platform Integration:</strong> Apple HealthKit, Google Fit, Samsung Health integrations with explicit authorization for health data access and strict data minimization.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Automotive Platform Integration:</strong> Apple CarPlay, Android Auto, vehicle manufacturer platforms with limited data sharing scoped to necessary transaction facilitation.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">IFTTT and Automation:</strong> Integration with automation platforms with granular permission controls and activity logs showing all automated data flows.
        </li>
      </ul>

      <h4 className="mt-6 mb-4 text-[20px] font-semibold text-[#1a1f36]">
        j. IoT-Specific Privacy Rights and Controls
      </h4>
      
      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        You have enhanced rights and controls for IoT data:
      </p>
      
      <ul className="mt-4 list-disc space-y-3 pl-[16px] text-base font-normal text-[#4a5568] leading-[1.6]">
        <li>
          <strong className="font-medium text-[#1a1f36]">Device Data Dashboard:</strong> Centralized dashboard showing all connected devices, data collected from each device, and granular per-device privacy controls.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Selective Sensor Permissions:</strong> Ability to disable specific sensors (GPS, camera, microphone) or data collection types for individual devices without breaking core functionality.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Device Unlinking:</strong> Easy device unlinking process immediately stopping all data collection from specific IoT devices with retroactive data deletion option.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Local-Only Mode:</strong> Option to operate devices in local-only mode with no cloud connectivity for privacy-conscious users, though some features may be limited.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Data Retention Controls:</strong> Configurable data retention periods for IoT telemetry and sensor data, including option for immediate deletion after processing.
        </li>
        <li>
          <strong className="font-medium text-[#1a1f36]">Export Device Data:</strong> Comprehensive export of all data collected from your IoT devices in machine-readable formats (CSV, JSON) for analysis or migration.
        </li>
      </ul>

      <p className="mb-4 text-base font-normal text-[#4a5568] leading-[1.6]">
        For questions about IoT data processing, smart device privacy, or to manage your connected devices, contact our IoT Privacy Team at <a href="mailto:iot-privacy@company.com" className="text-[#635bff] hover:text-[#0a2540] hover:underline">iot-privacy@company.com</a> or access your <a href="/device-privacy-center" className="text-[#635bff] hover:text-[#0a2540] hover:underline">Device Privacy Center</a>.
      </p>
    </section>
  );
};

export default IoTSmartDevicesSection;