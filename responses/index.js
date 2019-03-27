export const errorResponse = (res, err) => {
    res.status(500).json({
        error: err
    });
};

export const successResonse = (res, data) => {
    res.status(200).json(data);
};

export const notFoundResponse = (res, message) => {
    res.status(404).json({
        message
    });
}