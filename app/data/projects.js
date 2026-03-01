export const projects = [
  {
    slug: 'fraudshield',
    title: 'FraudShield',
    shortSummary: 'Real-time fraud detection platform with a 5-microservice architecture and XGBoost ML classifier.',
    image: '/images/fraudshield-preview.png',
    imageAlt: 'FraudShield platform screenshot',
    summary:
      'FraudShield is a real-time financial transaction fraud detection platform built with a 5-microservice architecture (API gateway, user, ingestion, results, ML service). It uses an XGBoost binary classifier trained on the PaySim dataset (~6.3M transactions) to predict whether a transaction is fraudulent, returning a confidence score and risk level.',
    stack: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'gRPC', 'Docker', 'AWS'],
    visitLabel: 'View on GitHub',
    visitUrl: 'https://github.com/RayanMalki/fraudshield',
    highlights: [
      'Built a 5-microservice architecture (API gateway, user, ingestion, results, ML service) with gRPC and Protobuf contracts.',
      'Trained an XGBoost binary classifier on the PaySim dataset (~6.3M transactions) returning a confidence score and risk level.',
      'Implemented backend services with Java/Spring Boot and an ML inference service with Python/FastAPI.',
      'Built a Next.js 15 / React 19 frontend with a transaction analysis form, confidence score visualization, and fraud history dashboard.'
    ]
  },
  {
    slug: 'resume-tailor',
    title: 'Resume Tailor',
    shortSummary: 'ATS-focused resume platform with scoring, async processing, and artifact generation.',
    image: '/images/resume-tailor-preview.png',
    imageAlt: 'Resume Tailor landing page screenshot',
    summary:
      'Resume Tailor is a full-stack platform that analyzes resumes against job descriptions and returns actionable improvements. It combines deterministic scoring, reliability-focused backend pipelines, and secure authentication for production-ready behavior.',
    stack: ['Go', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    visitLabel: 'Visit Website',
    visitUrl: 'https://resumetailor.live',
    highlights: [
      'Implemented BM25-based scoring with deterministic skill buckets and missing-term detection.',
      'Built asynchronous processing with worker queues, retries, run states, and timeouts.',
      'Added OAuth 2.0 authentication and protected APIs with validation and rate limiting.',
      'Generated structured outputs for PDF, DOCX, cover letter, and interview preparation.'
    ]
  },
  {
    slug: 'http-server-go',
    title: 'HTTP/1.1 Server in Go',
    shortSummary: 'Low-level concurrent HTTP server built from raw TCP sockets and RFC specs.',
    image: '/images/http-server-architecture.png',
    imageAlt: 'HTTP server architecture diagram',
    summary:
      'This project is a protocol-level server implementation focused on correctness and extensibility. It handles request parsing, chunked transfer encoding, response generation, and proxy-style streaming while remaining modular for future distributed-system integration.',
    stack: ['Go', 'TCP Sockets', 'HTTP/1.1', 'RFC 9110', 'RFC 9112'],
    visitLabel: 'View on GitHub',
    visitUrl: 'https://github.com/RayanMalki/tcptohttp',
    highlights: [
      'Reached full HTTP/1.1 compliance including status lines, headers, and connection behavior.',
      'Implemented concurrent connection handling directly on raw sockets.',
      'Supported chunked transfer encoding and real-time proxy streaming.',
      'Kept the architecture modular for future system-level expansion.'
    ]
  }
];
