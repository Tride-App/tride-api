import pkg from '../../package.json'

export const serviceInfo = {
    name: pkg.name,
    version: pkg.version,
    status: 'ok',
} as const

export const apiEndpoints = ['/api', '/api/health', '/api/version'] as const

export const createHealthPayload = (now = new Date()) => {
    return {
        ...serviceInfo,
        timestamp: now.toISOString(),
    }
}

export const createVersionPayload = () => {
    return {
        name: serviceInfo.name,
        version: serviceInfo.version,
    }
}