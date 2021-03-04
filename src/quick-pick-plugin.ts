import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    context.subscriptions.push(theia.commands.registerCommand({
        id: 'quick-pick-example',
        label: "Test Quick-pick"
    }, async () => {
        const quickPick = theia.window.createQuickPick();
        quickPick.items = ['First', 'Second', 'Third'].map(item => ({ label: item }));
        quickPick.show();

        const choice = await new Promise<theia.QuickPickItem | undefined>(c => quickPick.onDidAccept(() => c(quickPick.activeItems[0])));
        if (choice) {
            theia.window.showInformationMessage(choice.label);
        }
    }));

}

export function stop() {
}