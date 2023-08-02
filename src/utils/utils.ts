export const formatCurrentDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const formatDate = (content: string): string => {
    const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
    const findDates = content.match(dateRegex);
    let formattedDates: string = "";

    if (findDates) {
        formattedDates = findDates.join(', ');
    }

    return formattedDates;
};
