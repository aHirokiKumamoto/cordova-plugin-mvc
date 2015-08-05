/********* mvc.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface mvc : CDVPlugin {
  // Member variables go here.
}

- (void)fetchMission:(CDVInvokedUrlCommand*)command;
- (void)fetchVision:(CDVInvokedUrlCommand*)command;
- (void)fetchCoreValues:(CDVInvokedUrlCommand*)command;
@end

@implementation mvc

NSString * const kMission = @"我々は、ソフトウェアを人々の身近な存在にし、世界に新しい日常を提供し続けます。";
NSString * const kVision = @"自らの技術力と人間力で 「あらゆる機器・サービス・人」をつなげ、ユーザ・業界・地域の課題を解き続けるイノベーションソフトウェア会社となる。";
NSString * const kUserFirst = @"ユーザのことを一番に考え、期待を超える";
NSString * const kThinkBig = @"大胆に構想し、出来ない理由ではなく可能にする手段を考える";
NSString * const kChallenge = @"チャンスを逃さず、挑戦することをためらわない";
NSString * const kCommitment = @"プロのビジネスパーソンとして妥協せず、継続して最後までやりきる";
NSString * const kProfessionalism = @"得意分野を作り出し、専門性で尖り続ける";
NSString * const kCollaboration = @"ひとりひとりに敬意を払い、互いの英知を結集する";
NSString * const kDeliverWOW = @"ワクワクを作ってワクワクを提供する";
NSString * const kSimplicity = @"合理性を重んじ、ものごとをシンプルに進める";
NSString * const kEvolution = @"現状に満足することなく変革し続ける";
NSString * const kFrugality = @"コストを意識し、常に創意工夫を心がける";


- (void)fetchMission:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:kMission];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)fetchVision:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:kVision];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)fetchCoreValues:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    NSArray* coreValues = @[kUserFirst, kThinkBig, kChallenge, kCommitment, kProfessionalism,
                            kCollaboration, kDeliverWOW, kSimplicity, kEvolution, kFrugality];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:coreValues];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end

