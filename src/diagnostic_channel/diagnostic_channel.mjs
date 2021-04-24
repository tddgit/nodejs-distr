import diagnostic_channel from 'diagnostic_channel';

const channel = diagnostic_channel.channel('my-channel');

channel.subscribe((message, name) => {});

if (channel.hasSubscribers) {
    channel.publish({
        some: 'data',
    });
}
