interface Notify {
  send(): void;
}

class EmailNotification implements Notify {
  send(): void {
    console.log("Send email notification");
  }
}

class SMSNotification implements Notify {
  send(): void {
    console.log("Send SMS notification");
  }
}

abstract class NotifyFactory {
  abstract createNotify(): Notify;
  sendNotify(): void {
    const notify = this.createNotify();
    notify.send();
  }
}

class EmailNotifyFactory extends NotifyFactory {
  createNotify(): Notify {
    return new EmailNotification();
  }
}

class SMSNotifyFactory extends NotifyFactory {
  createNotify(): Notify {
    return new SMSNotification();
  }
}

class NotifyClient {
  constructor(private notifyFactory: NotifyFactory) {}
  sendNotify(): void {
    this.notifyFactory.sendNotify();
  }
}

class NotifyApplication {
  main(): void {
    const emailFactory = new EmailNotifyFactory();
    const smsFactory = new SMSNotifyFactory();
    const client1 = new NotifyClient(emailFactory);
    const client2 = new NotifyClient(smsFactory);
    client1.sendNotify();
    client2.sendNotify();
  }
}

const notifyApp = new NotifyApplication();
notifyApp.main();
