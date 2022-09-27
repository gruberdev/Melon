﻿(function (
    identifier,
    method,
    route,
    serializedQuery,
    serializedBody,
    serializedHeaders,
    isAsync
) {
    const request = {
        query: Melon.std.json.tryParse(serializedQuery),
        body: Melon.std.json.tryParse(serializedBody),
        headers: Melon.std.json.tryParse(serializedHeaders)
    }

    const callback = Melon
        .http
        ._apps[identifier]
        .getEndpoints()
        .find(x => x.method === method && x.route === route)
        .callback;

    const result = () => callback(request);

    if (isAsync) {
        return (Melon
            .http
            ._apps[identifier]
            ._promises
            .push(result)) - 1;
    }

    return result;
})(
    '{appIdentifier}',
    '{method}',
    '{route}',
    '{serializedQuery}',
    '{serializedBody}',
    '{serializedHeaders}',
    true
)